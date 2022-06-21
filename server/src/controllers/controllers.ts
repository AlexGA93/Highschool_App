import {Request, Response} from 'express';
const { validationResult } = require('express-validator');
const db = require('../database/database');
require('dotenv').config();


// routes controllers
const initialProcess = (
    req: Request,
    res: Response
) => {
    db.query(
        'CREATE TABLE `HighSchools` (`id` int(11) NOT NULL,`name` varchar(100) NOT NULL,`contact_phone` varchar(100) NOT NULL,`web` varchar(100) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;'
        , 
        (err: Error) => {
        if (err) throw err;

        res.send(`CONNECTED TO MYSQL DB AT HOST ${process.env.MYSQL_HOST}`)
    });
};


const getHighSchoolsTable = (
    req: Request, 
    res: Response
    ) => {
        db.query(
            'SELECT * FROM HighSchools', 
            (err: Error, result: any) => {
            if (err) throw err;
    
            // res.send(result);
            res.json({'HighSchools':result});
        });
    };


module.exports = {
    initialProcess,
    // initDatabase,
    getHighSchoolsTable
}