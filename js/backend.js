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

app.post('/save', (req, res) => {
    let sqlCode;

    const firstsetArray = [req.body.characterName, req.body.classLevel,
    req.body.background, req.body.playerName, req.body.race,
    req.body.alignment, req.body.hitDice, req.body.otherProficiencies,
    req.body.features, req.body.equipment, req.body.attackName1,
    req.body.attackName2, req.body.attackName3, req.body.attackBonus1,
    req.body.attackBonus2, req.body.attackBonus3, req.body.attackDamage1,
    req.body.attackDamage2, req.body.attackDamage3];

    const firstsetArrayNames = ["charactername", "class", "background",
        "playerName", "race", "alignment", "hitDice", "proficiencies",
        "features", "equipment", "attack1", "attack2", "attack3",
        "bonus1", "bonus2", "bonus3", "damage1", "damage2", "damage3"];

    const numbersetArray = [Number(req.body.experiencePoints),
    Number(req.body.proficiencyBonus), Number(req.body.strength),
    Number(req.body.dexterity), Number(req.body.constitution),
    Number(req.body.Intelligence), Number(req.body.Wisdom),
    Number(req.body.Charisma), Number(req.body.hitPointMaximum),
    Number(req.body.currentHitPoints), Number(req.body.armor),
    Number(req.body.tempHitPoints), Number(req.body.initiative),
    Number(req.body.speed), Number(req.body.platinum),
    Number(req.body.gold), Number(req.body.silver),
    Number(req.body.copper)];

    const numberSetArrayName = ["experience", "proficiencyBonus",
        "strength", "dexterity", "constitution", "Intelligence", "Wisdom",
        "Charisma", "hitPointMaximum", "currentHitPoints", "AC",
        "tempHitPoints", "initiative", "speed", "platinum", "gold",
        "silver", "copper"];

    const booleanset = [Boolean(req.body.strengthSave), Boolean(req.body.dexteritySave),
    Boolean(req.body.constitutionSave), Boolean(req.body.IntelligenceSave),
    Boolean(req.body.WisdomSave), Boolean(req.body.CharismaSave), Boolean(req.body.athletics),
    Boolean(req.body.acrobatics), Boolean(req.body.sleightOfHand), Boolean(req.body.stealth),
    Boolean(req.body.arcane), Boolean(req.body.history), Boolean(req.body.investigation),
    Boolean(req.body.nature), Boolean(req.body.religion), Boolean(req.body.animalHandling),
    Boolean(req.body.insight), Boolean(req.body.medicine), Boolean(req.body.perception),
    Boolean(req.body.survival), Boolean(req.body.deception), Boolean(req.body.intimidation),
    Boolean(req.body.performance), Boolean(req.body.persuasion)];

    const booleanSetArrayName = ["strengthSave", "dexteritySave",
        "ConstiturionSave", "IntelligenceSave", "WisdomSave",
        "CharismaSave", "athletics", "acrobatics", "SlightOfHand",
        "stealth", "arcana", "history", "investigation",
        "nature", "religion", "animalHandling", "insight", "medicine",
        "perception", "survival", "deception", "intimidation",
        "performance", "persuasion"];

    for (var i = 0; i < firstsetArray.length; i++) {
        sqlCode = `UPDATE charactersheet SET ${firstsetArrayNames[i]} = '${firstsetArray[i]}' WHERE username = '${app.locals.currentUsers}'`;
        con.query(sqlCode, (err, result) => {
            if (err) {
                console.log(err.message);
            }
            if (result) {
                console.log(result.affectedRows);
                //res.send(JSON.stringify({ message: result[0] }));
            }
            else {
                //res.send(JSON.stringify({ message: 'wrong username or password' }));
            }
        });
    }

    for (var i = 0; i < numbersetArray.length; i++) {
        sqlCode = `UPDATE charactersheet SET ${numberSetArrayName[i]} = '${numbersetArray[i]}' WHERE username = '${app.locals.currentUsers}'`;
        con.query(sqlCode, (err, result) => {
            if (err) {
                console.log(err.message);
            }
            if (result) {
                console.log(result.affectedRows);
                //res.send(JSON.stringify({ message: result[0] }));
            }
            else {
                //res.send(JSON.stringify({ message: 'wrong username or password' }));
            }
        });
    }

    for (var i = 0; i < booleanset.length; i++) {
        

        if(booleanset[i])
        {
            sqlCode = `UPDATE proficiency SET ${booleanSetArrayName[i]} = '1' WHERE username = '${app.locals.currentUsers}'`;
        }
        else {
            sqlCode = `UPDATE proficiency SET ${booleanSetArrayName[i]} = '0' WHERE username = '${app.locals.currentUsers}'`;
        }

        con.query(sqlCode, (err, result) => {
            if (err) {
                console.log(err.message);
            }
            if (result) {
                console.log(result.affectedRows);
                //res.send(JSON.stringify({ message: result[0] }));
            }
            else {
                //res.send(JSON.stringify({ message: 'wrong username or password' }));
            }
        });
    }
})

app.listen(portNum, () => {
    console.log(`listening on port ${portNum}`);
});