const mysql = require('mysql');

module.exports = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'HardApple$12',
    database: 'mydb',
});