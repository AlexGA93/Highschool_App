const mysql = require('mysql2');

require('dotenv').config();
console.log(
    process.env.MYSQL_USER+"\n"+
    process.env.MYSQL_PASSWORD+"\n"+
    process.env.MYSQL_DATABASE+"\n"+
    process.env.MYSQL_HOST);

// const database = '';
const database = mysql.createConnection({
    user: process.env.MYSQL_USER,
    host: process.env.MYSQL_HOST,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

module.exports = database;