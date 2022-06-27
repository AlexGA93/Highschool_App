// import { MySQLdatabase } from "../types/type";
import {Request, Response} from 'express';
const mysql = require('mysql2');

require('dotenv').config();

const database = mysql.createConnection(
    {
        user: process.env.MYSQL_USER,// johndoe
        host: process.env.MYSQL_HOST,// mysqldb
        password: process.env.MYSQL_PASSWORD,// secret
        // database: process.env.MYSQL_DATABASE // Highschool_App
    }
);

database.connect((err: Error) => {
    if (err) throw err;

    console.log('Connected to MySQL!');

    // connect to the database
    database.query(
        `CREATE DATABASE ${process.env.MYSQL_DATABASE};`,
        (err:Error) => {
            if(err) throw err;

            console.log(`Database ${process.env.MYSQL_DATABASE} created!`);
            
        }
    );
    
});


module.exports = database;