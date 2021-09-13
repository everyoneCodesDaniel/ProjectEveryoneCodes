const express = require('express');
const app = express();
const mysql = require('mysql');
const util = require('util');
const dbconfig = require('./dbconfig.js');


// parse HTTP POST Data 
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); // accept json data

// put client-side code (html/css/js) in the frontend folder
app.use(express.static(__dirname + '/../frontend'));


connection = mysql.createConnection(dbconfig.dbSettings);
connection.connect((err) => {
    if(err) {
        console.log('Error connecting to DB: change connection settings!');
    } else {
        console.log('Connection established!');
    }
});

const dbQuery = util.promisify(connection.query).bind(connection);

app.post("/project/submitData", async (req, res) => {

    try {
        let result = await dbQuery("insert into personen (username,password) values (?,?)", 
                                    [req.body.username,req.body.password]);
                                    
        res.json({result});
        console.log(result)
    } catch (err) {
        console.log("something went wrong...", err);
    }
});


// http://localhost:3000
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
});