const express = require('express');
const app = express();
const mysql = require('mysql');
const util = require('util');
const dbconfig = require('./dbconfig.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const session = require('express-session');

// parse HTTP POST Data 
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); // accept json data

// put client-side code (html/css/js) in the frontend folder
app.use(express.static(__dirname + '/../frontend'));

// User login status
app.use(session({
    secret: 'keyboard cat', 
    cookie: { secure: true},
    resave: true,
    saveUninitialized: true}
));

connection = mysql.createConnection(dbconfig.dbSettings);
connection.connect((err) => {
    if(err) {
        console.log('Error connecting to DB: change connection settings!');
    } else {
        console.log('Connection established!');
    }
});

const dbQuery = util.promisify(connection.query).bind(connection);

app.post("/project/submitData", (req, res) => {
    connection.query("SELECT username FROM personen where username=?",
        [req.body.username],
        (err, rows) => {
            if (err) throw err;
            console.log(rows)
            if (rows.length >= 1) {
                res.json({message: 'used'});
            } else {
                bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                    connection.query("insert into personen (username,password) values (?,?)",
                        [req.body.username, hash],
                        (err, result) => {
                            if (err) throw err;
                            console.log("created a new user with id ", result.insertId);
                            res.json({message: 'inserted'});
                        });
                });
            }
        });
});

app.post("/project/loginplayer", async (req, res) => {
    let hash;
    await dbQuery('SELECT password FROM personen where username=?', [req.body.username]).then(rows => {
        console.log(rows)
        if (rows.length === 0) {
            res.json({ message: 'wrong' });
        } else {
            console.log(rows[0].password)
            hash = rows[0].password
            bcrypt.compare(req.body.password, hash, function (err, result) {
                if (result === false) {
                    res.json({ message: 'false' });
                } else {
                    connection.query("SELECT * FROM personen where username=? and password=?", [req.body.username, hash],
                        (err, rows) => {
                            if (err) throw err;
                            if (rows.length === 1) {
                                console.log("login ok!");
                                req.session.user = {
                                    id: rows[0].personId,
                                    name: rows[0].username,
                                };
                                console.log(req.session.user)
                                res.json({ message: 'ok' });
                            }
                        }
                    );
                }
            });
        }
    });
});

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// http://localhost:3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});