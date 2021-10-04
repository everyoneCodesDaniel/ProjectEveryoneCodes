const express = require('express');
const app = express();
const mysql = require('mysql');
const util = require('util');
const dbconfig = require('./dbconfig.js');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const session = require('express-session');
const { count } = require('console');

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

var counter = 0;

app.put("/startgame/:username", async (req, res) => {
    try {
        console.log("StartgameOIDA!");
        await dbQuery("create table durchläufe" + counter + "(id int primary key auto_increment, ergebnis VARCHAR(10) DEFAULT NULL check (ergebnis in ('gewonnen', 'verloren')), zuganzahl int DEFAULT 0,personId int not NULL, constraint durchlauf" + counter + " foreign key (personId) REFERENCES personen (personId));"
        );
        console.log("Durchläufe created!");
        var id = await dbQuery("SELECT personId FROM personen where username = ?;", [req.params.username]);
        id = id[0].personId;
        await dbQuery("insert into durchläufe" + counter + "(personId) values (?);", [id]).then(async rows => {
            //console.log(rows)
            await dbQuery("create table details" + counter + "(zuganzahl int primary key auto_increment, look VARCHAR(1) DEFAULT NULL,pickup VARCHAR(1) DEFAULT NULL, apply VARCHAR(1) DEFAULT NULL,talk VARCHAR(1) DEFAULT NULL, richtung VARCHAR (10) DEFAULT NULL,position VARCHAR(20) not NULL, durchlaufid int not NULL, constraint details" + counter + " foreign key (durchlaufid) REFERENCES durchläufe" + counter + "(id));").
            then(connection.query("insert into details" + counter++ + " (position,durchlaufid) values ('x3/y3',1)")
            )
        })
        console.log("Details created!");
        res.send('worked')
    } catch (err) {
        console.log("something went wrong...", err);
        res.sendStatus(500);
    }
    console.log("Finish!");
});

app.delete("/deleteAll", async (req, res) => {
    try {
        await dbQuery("SET FOREIGN_KEY_CHECKS = 0;");
        for (var deleteDB = 0; deleteDB <= 10; deleteDB++) {
            await dbQuery("drop table if exists details" + deleteDB + ", durchläufe" + deleteDB + ";");
            console.log("deleted DB: " + deleteDB);
        }
        await dbQuery("SET FOREIGN_KEY_CHECKS = 1;");
        res.send('worked')
    } catch (err) {
        console.log("something went wrong...", err);
        res.sendStatus(500);
    }
});

app.put("/exitgame", async (req, res) => {
    console.log("exitOida!");
    var zug;
    var id;
    var counter2 = counter-1;
    console.log(counter2)
    await dbQuery("SELECT zuganzahl FROM details" + counter2 + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        console.log(rows)
        zug = rows[0].zuganzahl
        console.log(zug)
        await dbQuery("select id FROM durchläufe" + counter2 + " ORDER BY id DESC LIMIT 1;").then(rows => {
                id = rows[0].id
                console.log(id)    
                connection.query("update durchläufe" + counter2 + " set zuganzahl = " + zug + ", ergebnis = 'verloren' where id = " + id);
            });
        });
        res.send('worked')
    });

app.put("/wongame", async (req, res) => {
    console.log("wonOida!");
    var zug;
    var id;
    var counter2 = counter-1;
    console.log(counter2)
    await dbQuery("SELECT zuganzahl FROM details" + counter2 + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        console.log(rows)
        zug = rows[0].zuganzahl
        console.log(zug)
        await dbQuery("select id FROM durchläufe" + counter2 + " ORDER BY id DESC LIMIT 1;").then(rows => {
            id = rows[0].id
            console.log(id)
            connection.query("update durchläufe" + counter2 + " set zuganzahl = " + zug + ", ergebnis = 'gewonnen' where id = " + id);
        });
    });
    res.send('worked')
});

app.put("/direction/north", async (req, res) => {
    var id;
    console.log('idvorhernorth ' + id)
    var x = req.body.x;
    console.log('xvorhernorth ' +x)
    var y = req.body.y;
    console.log('yvorhernorth ' + y)
    var counter2 = counter-1;
    console.log('c2vorhernorth ' + counter2)
    console.log('cvorhernorth ' + counter)
    await dbQuery("select zuganzahl FROM details" + counter2 + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        await dbQuery("update details" + counter2 + " set richtung = 'n' where zuganzahl = " + id).then(
            connection.query("insert into details" + counter2 + " (position,durchlaufid) values ('x" + x + "/y" + y + "',1)")
        );
    });
    console.log('idnachhernorth ' + id)
    console.log('xnachhernorth ' + x)
    console.log('ynachhernorth ' + y)
    console.log('c2nachhernorth ' + counter2)
    console.log('cnachhernorth ' + counter)
    res.send('worked')
});

app.put("/direction/south", async (req, res) => {
    var id;
    console.log('idvorhersouth ' + id)
    var x = req.body.x;
    console.log('xvorhersouth ' + x)
    var y = req.body.y;
    console.log('yvorhersouth ' + y)
    var counter2 = counter-1;
    console.log('c2vorhersouth ' + counter2)
    console.log('cvorhersouth ' + counter)
    await dbQuery("select zuganzahl FROM details" + counter2 + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        await dbQuery("update details" + counter2 + " set richtung = 's' where zuganzahl = " + id).then(
            connection.query("insert into details" + counter2 + " (position,durchlaufid) values ('x" + x + "/y" + y + "',1)")
        );
    });
    console.log('idnachhersouth ' + id)
    console.log('xnachhersouth ' + x)
    console.log('ynachhersouth ' + y)
    console.log('c2nachhersouth ' + counter2)
    console.log('cnachhersouth ' + counter)
    res.send('worked')
});

app.put("/direction/east", async (req, res) => {
    var id;
    console.log('idvorhereast ' + id)
    var x = req.body.x;
    console.log('xvorhereast ' + x)
    var y = req.body.y;
    console.log('yvorhereast ' + y)
    var counter2 = counter-1;
    console.log('c2vorhereast ' + counter2)
    console.log('cvorhereast ' + counter)
    await dbQuery("select zuganzahl FROM details" + counter2 + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        await dbQuery("update details" + counter2 + " set richtung = 'e' where zuganzahl = " + id).then(
            connection.query("insert into details" + counter2 + " (position,durchlaufid) values ('x" + x + "/y" + y + "',1)")
        );
    });
    console.log('idnachhereast ' + id)
    console.log('xnachhereast ' + x)
    console.log('ynachhereast ' + y)
    console.log('c2nachhereast ' + counter2)
    console.log('cnachhereast ' + counter)
    res.send('worked')
});

app.put("/direction/west", async (req, res) => {
    var id;
    console.log('idvorherwest ' + id)
    var x = req.body.x;
    console.log('xvorherwest ' + x)
    var y = req.body.y;
    console.log('yvorherwest ' + y)
    var counter2 = counter-1;
    console.log('c2vorherwest ' + counter2)
    console.log('cvorherwest ' + counter)
    await dbQuery("select zuganzahl FROM details" + counter2 + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        await dbQuery("update details" + counter2 + " set richtung = 'w' where zuganzahl = " + id).then(
            connection.query("insert into details" + counter2 + " (position,durchlaufid) values ('x" + x + "/y" + y + "',1)")
        );
    });
    console.log('idnachherwest ' + id)
    console.log('xnachherwest ' + x)
    console.log('ynachherwest ' + y)
    console.log('c2nachherwest ' + counter2)
    console.log('cnachherwest ' + counter)
    res.send('worked')
});

app.patch("/look", async (req, res) => {
    var id;
    var counter2 = counter-1;
    var symbol;
    await dbQuery("select zuganzahl FROM details" + counter2 + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        console.log(id)
        await dbQuery("select look from details" + counter2 + " where zuganzahl = " + id).then(rows => {
            symbol = rows[0].look
            console.log(symbol)
            if (symbol === 'x' || symbol === null) {
                if (req.body.lookDB) {
                    connection.query("update details" + counter2 + " set look='o' where zuganzahl = " + id)
                } else {
                    connection.query("update details" + counter2 + " set look='x' where zuganzahl = " + id)
                }
            }
        }
        );
    });
});

app.patch("/use", async (req, res) => {
    var id;
    var counter2 = counter-1;
    var symbol;
    await dbQuery("select zuganzahl FROM details" + counter2 + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        console.log(id)
        await dbQuery("select apply from details" + counter2 + " where zuganzahl = " + id).then(rows => {
            symbol = rows[0].apply
            console.log(symbol)
            if (symbol === 'x' || symbol === null) {
                if (req.body.useDB) {
                    connection.query("update details" + counter2 + " set apply='o' where zuganzahl = " + id)
                } else {
                    connection.query("update details" + counter2 + " set apply='x' where zuganzahl = " + id)
                }
            }
        }
        );
    });
});

app.patch("/pickup", async (req, res) => {
    var id;
    var counter2 = counter-1;
    var symbol;
    await dbQuery("select zuganzahl FROM details" + counter2 + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        console.log(id)
        await dbQuery("select pickup from details" + counter2 + " where zuganzahl = " + id).then(rows => {
            symbol = rows[0].pickup
            console.log(symbol)
            if (symbol === 'x' || symbol === null) {
                if (req.body.pickupDB) {
                    connection.query("update details" + counter2 + " set pickup='o' where zuganzahl = " + id)
                } else {
                    connection.query("update details" + counter2 + " set pickup='x' where zuganzahl = " + id)
                }
            }
        }
        );
    });
});

app.patch("/talk", async (req, res) => {
    var id;
    var counter2 = counter-1;
    var symbol;
    await dbQuery("select zuganzahl FROM details" + counter2 + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        console.log(id)
        await dbQuery("select talk from details" + counter2 + " where zuganzahl = " + id).then(rows => {
            symbol = rows[0].talk
            console.log(symbol)
            if (symbol === 'x' || symbol === null) {
                if (req.body.talkDB) {
                    connection.query("update details" + counter2 + " set talk='o' where zuganzahl = " + id)
                } else {
                    connection.query("update details" + counter2 + " set talk='x' where zuganzahl = " + id)
                }
            }
        }
        );
    });
});

/* let id = connection.query("select * from durchläufe where personId = ? order by id desc limit 1",
[req.session.user.id]); */

app.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// http://localhost:3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});