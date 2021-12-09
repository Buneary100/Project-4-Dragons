const db = require('./database');
const express = require('express');
const app = express();  //get an express object
const cors = require('cors');  //avoid that nasty CORS error
const bodyParser = require('body-parser');
const{check, validationResults} = require('express-validator');

const portNum = 3000;

//take care of CORS situation
app.use(cors({origin: '*'}));

//allow body parsing
app.use(express.json());

app.get('/', async (req, res) =>{
    const results = await db.promise().query(`SELECT * FROM LOGIN`)
    res.status(200).send(results[0]);
})

app.post('/', 
check('USERNAME').notEmpty().withMessage('Username cannot be empty'), 
check('PASSWORD').notEmpty().withMessage('Password cannot be empty'), 
(req, res) => {
    console.log('\n\nON THE SERVER');

    const error = validationResult(req);
    if(!errors.isEmpty())
    {
      return res.status(400).json({errors: errors.array()}) 
    }

    const { username, password} = req.body;
    if (password && username){
        try{
            db.promise().query(`INSERT INTO USERS VALUES('${username}', '${password}')`)
            res.status(201).send({msg: 'created user'})
        }
        catch(err)
        {
            console.log(err);
        }

    }
    
});