const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');
var path = require('path');
const app = express();  //get an express object
const cors = require('cors');  //avoid that nasty CORS error
const { check, validationResults } = require('express-validator');
//const req = require('express/lib/request');
//const res = require('express/lib/response');
const portNum = 3000;

//take care of CORS situation
app.use(cors({ origin: '*' }));

//allow body parsing
app.use(express.json());

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'HardApple$12',
    database: 'mydb',
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});


app.post('/register', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;


    con.query("SELECT * FROM login WHERE Username = ?", username, (err, result) => {
        if (result.length > 0) {
            res.send(JSON.stringify({ message: 'wrong' }));
        }
        else {
            con.query("INSERT INTO login (Username, Password) VALUES (?,?)", [username, password], function (err, result) {
                if (err) {
                    console.log(err.message);
                }
                else {
                    console.log("worked");
                }
            });
            con.query("INSERT INTO charactersheet (Username) VALUES (?)", username, function (err, result) {
                if (err) {
                    console.log(err.message);
                }
                else {
                    console.log("worked");
                }
            });
            con.query("INSERT INTO proficiency (Username) VALUES (?)", username, function (err, result) {
                if (err) {
                    console.log(err.message);
                }
                else {
                    console.log("worked");
                }
            });
            app.locals.currentUsers = username;
            res.send(JSON.stringify({ message: username }));
        }

    });
});

app.post('/login', (req, res) => {

    const username = req.body.username;
    const password = req.body.password;

    con.query("SELECT * FROM login WHERE Username = ? AND Password = ?", [username, password], (err, result) => {
        if (err) {
            console.log(err.message);
        }
        if (result.length > 0) {
            app.locals.currentUsers = username;
            res.send(JSON.stringify({ message: username }));
        }
        else {
            res.send(JSON.stringify({ message: 'wrong' }));
        }

    });

})

app.post('/setPage', (req, res) => {
    con.query("SELECT * FROM charactersheet WHERE Username = ?", app.locals.currentUsers, (err, result) => {
        if (err) {
            console.log(err.message);
        }
        if (result.length > 0) {
            console.log(result[0]);
            res.send(JSON.stringify({ message: result[0] }));
        }
        else {
            //res.send(JSON.stringify({ message: 'wrong username or password' }));
        }
    });

})

app.post('/setProficiency', (req, res) => {
    con.query("SELECT * FROM proficiency WHERE Username = ?", app.locals.currentUsers, (err, result) => {
        if (err) {
            console.log(err.message);
        }
        if (result.length > 0) {
            console.log(result[0]);
            res.send(JSON.stringify({ message: result[0] }));
        }
        else {
            //res.send(JSON.stringify({ message: 'wrong username or password' }));
        }
    });

})

app.listen(portNum, () => {
    console.log(`listening on port ${portNum}`);
});