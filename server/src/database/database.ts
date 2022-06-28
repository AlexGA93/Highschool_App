// import { MySQLdatabase } from "../types/type";
import {Request, Response} from 'express';
const mysql = require('mysql2');

require('dotenv').config();

const database = mysql.createConnection(
    {
        user: process.env.MYSQL_USER,// johndoe
        host: process.env.MYSQL_HOST,// mysqldb
        password: process.env.MYSQL_PASSWORD,// secret
        database: process.env.MYSQL_DATABASE // Highschool_App
    }
);

database.connect((err: Error) => {
    if (err) throw err;

    console.log('Connected to MySQL!');
});

// //solve auth method
// database.query(
//     `ALTER USER '${process.env.MYSQL_USER}'@'localhost' IDENTIFIED WITH mysql_native_password BY '${process.env.MYSQL_PASSWORD}';`,
//     (err: Error)=>{
//         if(err) throw err;

//         console.log("SOLVED ER_NOT_SUPPORTED_AUTH_MODE");
//     }
// );
// database.query(
//     `FLUSH PRIVILEGES;`,
//     (err: Error)=>{
//         if(err) throw err;

//         console.log("FLUSHED PRIVILEGES");
//     }
// );


// connect to the database
database.query(
    `USE ${process.env.MYSQL_DATABASE};`,
    (err:Error) => {
        if(err) throw err;

        console.log(`Database ${process.env.MYSQL_DATABASE} selected!`);
        
    }
);

module.exports = database;