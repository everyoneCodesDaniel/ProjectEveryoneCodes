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

var personId;
var detailsid;

app.put("/startgame/:username", async (req, res) => {
    try {
        console.log("StartgameOIDA!");
        await dbQuery("SELECT personId FROM personen where username = ?;", [req.params.username]).then(async rows => {
        personId = rows[0].personId;
            await dbQuery("SELECT * FROM information_schema.tables WHERE table_schema = 'project' AND table_name = 'durchläufe" + personId +"' LIMIT 1;").then(async rows => {
                console.log(rows)
                if (rows.length === 1) {
                    await dbQuery("insert into durchläufe" + personId + "(personId) values (?);", [personId]).then(async rows => {
                        await dbQuery("select id from durchläufe" + personId +" ORDER BY id DESC LIMIT 1;").then(async rows => {
                            detailsid = rows[0].id
                            await dbQuery("create table details" + personId + "_" + detailsid + "(zuganzahl int primary key auto_increment, look VARCHAR(1) DEFAULT NULL,pickup VARCHAR(1) DEFAULT NULL, apply VARCHAR(1) DEFAULT NULL,talk VARCHAR(1) DEFAULT NULL, richtung VARCHAR (10) DEFAULT NULL,position VARCHAR(20) not NULL, durchlaufid int not NULL, constraint details" + personId + "_" + detailsid + " foreign key (durchlaufid) REFERENCES durchläufe" + personId + "(id));")
                            .then(connection.query("insert into details" + personId + "_" + detailsid + " (position,durchlaufid) values ('x3/y3'," + detailsid + ")"))
                        })
                    })
                } else if (rows.length === 0){
                    await dbQuery("create table durchläufe" + personId + "(id int primary key auto_increment, ergebnis VARCHAR(10) DEFAULT NULL check (ergebnis in ('won', 'lost')), zuganzahl int DEFAULT 0,personId int not NULL, score int default 0, constraint durchlauf" + personId + " foreign key (personId) REFERENCES personen (personId));")
                    .then(async rows=> {
                        await dbQuery("insert into durchläufe" + personId + "(personId) values (?);", [personId]).then(async rows => {
                            await dbQuery("select id from durchläufe" + personId +" ORDER BY id DESC LIMIT 1;").then(async rows => {
                                detailsid = rows[0].id
                                await dbQuery("create table details" + personId + "_" + detailsid + "(zuganzahl int primary key auto_increment, look VARCHAR(1) DEFAULT NULL,pickup VARCHAR(1) DEFAULT NULL, apply VARCHAR(1) DEFAULT NULL,talk VARCHAR(1) DEFAULT NULL, richtung VARCHAR (10) DEFAULT NULL,position VARCHAR(20) not NULL, durchlaufid int not NULL, constraint details" + personId + "_" + detailsid + " foreign key (durchlaufid) REFERENCES durchläufe" + personId + "(id));")
                                .then(connection.query("insert into details" + personId + "_" + detailsid + " (position,durchlaufid) values ('x3/y3'," + detailsid + ")"))
                            })
                        })
                    })
                }

            })
        });
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
        for (var deleteDB = 0; deleteDB <= 30; deleteDB++) {
            await dbQuery("drop table if exists durchläufe" + deleteDB + ";");
        }
        for (var deleteDB2 = 0; deleteDB2 <= 30; deleteDB2++) {
            for (var deleteDB3 = 0; deleteDB3 <= 30; deleteDB3++) {
                await dbQuery("drop table if exists details" + deleteDB2 + "_" + deleteDB3 +";");
            }
        }
        console.log('Database deleted')
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
    var score = req.body.score;
    await dbQuery("SELECT zuganzahl FROM details" + personId + "_" + detailsid + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        console.log(rows)
        zug = rows[0].zuganzahl
        console.log(zug)
        connection.query("update durchläufe" + personId + " set zuganzahl = " + zug + ", ergebnis = 'lost', score = " + score + " where id = " + detailsid);
        connection.query("insert into rangliste set personId = " + personId + ", zuganzahl = " + zug +", score = " + score+", result = 'lost'");
        });
        res.send('worked')
    });

app.put("/wongame", async (req, res) => {
    console.log("wonOida!");
    var zug;
    var score = req.body.score;
    await dbQuery("SELECT zuganzahl FROM details" + personId + "_" + detailsid + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        console.log(rows)
        zug = rows[0].zuganzahl
        console.log(zug)
        connection.query("update durchläufe" + personId + " set zuganzahl = " + zug + ", ergebnis = 'won', score = " + score + " where id = " + detailsid);
        connection.query("insert into rangliste set personId = " + personId + ", zuganzahl = " + zug +", score = " + score +", result = 'won'");
    });
    res.send('worked')
});

app.put("/direction/north", async (req, res) => {
    var id;
    var x = req.body.x;
    var y = req.body.y;
    console.log(personId);
    console.log(detailsid);
    await dbQuery("select zuganzahl FROM details" + personId + "_" + detailsid + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        await dbQuery("update details" + personId + "_" + detailsid + " set richtung = 'n' where zuganzahl = " + id).then(
            connection.query("insert into details" + personId + "_" + detailsid + " (position,durchlaufid) values ('x" + x + "/y" + y + "'," + detailsid + ")")
        );
    });
    console.log('north');
    res.send('worked')
});

app.put("/direction/south", async (req, res) => {
    var id;
    var x = req.body.x;
    var y = req.body.y;
    console.log(personId);
    console.log(detailsid);
    await dbQuery("select zuganzahl FROM details" + personId + "_" + detailsid + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        await dbQuery("update details" + personId + "_" + detailsid + " set richtung = 's' where zuganzahl = " + id).then(
            connection.query("insert into details" + personId + "_" + detailsid + " (position,durchlaufid) values ('x" + x + "/y" + y + "'," + detailsid + ")")
        );
    });
    console.log('south');
    res.send('worked')
});

app.put("/direction/east", async (req, res) => {
    var id;
    var x = req.body.x;
    var y = req.body.y;
    console.log(personId);
    console.log(detailsid);
    await dbQuery("select zuganzahl FROM details" + personId + "_" + detailsid + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        await dbQuery("update details" + personId + "_" + detailsid + " set richtung = 'e' where zuganzahl = " + id).then(
            connection.query("insert into details" + personId + "_" + detailsid + " (position,durchlaufid) values ('x" + x + "/y" + y + "'," + detailsid + ")")
        );
    });
    console.log('east');
    res.send('worked')
});

app.put("/direction/west", async (req, res) => {
    var id;
    var x = req.body.x;
    var y = req.body.y;
    console.log(personId);
    console.log(detailsid);
    await dbQuery("select zuganzahl FROM details" + personId + "_" + detailsid + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        await dbQuery("update details" + personId + "_" + detailsid + " set richtung = 'w' where zuganzahl = " + id).then(
            connection.query("insert into details" + personId + "_" + detailsid + " (position,durchlaufid) values ('x" + x + "/y" + y + "'," + detailsid + ")")
        );
    });
    console.log('west');
    res.send('worked')
});

app.patch("/look", async (req, res) => {
    var id;
    var symbol;
    console.log(personId);
    console.log(detailsid);
    console.log(req.body.lookDB)
    await dbQuery("select zuganzahl FROM details" + personId + "_" + detailsid + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        await dbQuery("select look from details" + personId + "_" + detailsid + " where zuganzahl = " + id).then(rows => {
            symbol = rows[0].look
            if (symbol === 'x' || symbol === null) {
                if (req.body.lookDB) {
                    connection.query("update details" + personId + "_" + detailsid + " set look='o' where zuganzahl = " + id)
                } else {
                    connection.query("update details" + personId + "_" + detailsid + " set look='x' where zuganzahl = " + id)
                }
            }
        }
        );
    });
    console.log('look');
    res.send('worked')
});

app.patch("/use", async (req, res) => {
    var id;
    var symbol;
    console.log(personId);
    console.log(detailsid);
    console.log(req.body.useDB)
    await dbQuery("select zuganzahl FROM details" + personId + "_" + detailsid + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        await dbQuery("select apply from details" + personId + "_" + detailsid + " where zuganzahl = " + id).then(rows => {
            symbol = rows[0].apply
            if (symbol === 'x' || symbol === null) {
                if (req.body.useDB) {
                    connection.query("update details" + personId + "_" + detailsid + " set apply='o' where zuganzahl = " + id)
                } else {
                    connection.query("update details" + personId + "_" + detailsid + " set apply='x' where zuganzahl = " + id)
                }
            }
        }
        );
    });
    console.log('use');
    res.send('worked')
});

app.patch("/pickup", async (req, res) => {
    var id;
    var symbol;
    console.log(personId);
    console.log(detailsid);
    console.log(req.body.pickupDB)
    await dbQuery("select zuganzahl FROM details" + personId + "_" + detailsid + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        await dbQuery("select pickup from details" + personId + "_" + detailsid + " where zuganzahl = " + id).then(rows => {
            symbol = rows[0].pickup
            if (symbol === 'x' || symbol === null) {
                if (req.body.pickupDB) {
                    connection.query("update details" + personId + "_" + detailsid + " set pickup='o' where zuganzahl = " + id)
                } else {
                    connection.query("update details" + personId + "_" + detailsid + " set pickup='x' where zuganzahl = " + id)
                }
            }
        }
        );
    });
    console.log('pickup');
    res.send('worked')
});

app.patch("/talk", async (req, res) => {
    var id;
    var symbol;
    console.log(personId);
    console.log(detailsid);
    console.log(req.body.talkDB)
    await dbQuery("select zuganzahl FROM details" + personId + "_" + detailsid + " ORDER BY zuganzahl DESC LIMIT 1;").then(async rows => {
        id = rows[0].zuganzahl
        await dbQuery("select talk from details" + personId + "_" + detailsid + " where zuganzahl = " + id).then(rows => {
            symbol = rows[0].talk
            if (symbol === 'x' || symbol === null) {
                if (req.body.talkDB) {
                    connection.query("update details" + personId + "_" + detailsid + " set talk='o' where zuganzahl = " + id)
                } else {
                    connection.query("update details" + personId + "_" + detailsid + " set talk='x' where zuganzahl = " + id)
                }
            }
        }
        );
    });
    console.log('talk');
    res.send('worked')
});

app.get("/history/:username", async (req, res) => {
    var ergebnis;
    var id;
    try {
        await dbQuery("SELECT personId FROM personen where username = ?;", [req.params.username]).then(async rows => {
            personId = rows[0].personId;
            await dbQuery("select id,ergebnis from durchläufe" + personId +" ORDER BY id DESC LIMIT 1;").then(async rows => {
                id = rows[0].id
                ergebnis = rows[0].ergebnis
                await dbQuery("SELECT zuganzahl,look,pickup,apply,talk,richtung,position FROM details" + personId + "_" + id + ";")
                .then(rows => {
                    res.send({ergebnis: ergebnis, rows: rows})
                })
            })
        });
    } catch (err) {
        console.log("something went wrong...", err);
        res.sendStatus(500);
    }
    console.log("Finish!");
});

app.get("/score", async (req, res) => {
    try {
        await dbQuery("SELECT p.username,r.zuganzahl,r.score,r.result FROM rangliste r, personen p WHERE r.personId=p.personId ORDER BY score DESC;").then(rows => {
        res.send({rows: rows})
        });
    } catch (err) {
        console.log("something went wrong...", err);
        res.sendStatus(500);
    }
    console.log("Finish!");
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