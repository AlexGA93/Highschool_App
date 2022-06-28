import {Request, Response} from 'express';
const { validationResult } = require('express-validator');
const db = require('../database/database');
require('dotenv').config();

import fs from 'fs';
import path from 'path';

// create database
// const createDatabase = (
//     req: Request,
//     res: Response
// ) => {
    
// };

// create highschool table
const createHighschool = (
    req: Request,
    res: Response
) => {

    const createHighshcool = "CREATE TABLE IF NOT EXISTS highschools(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, center_name VARCHAR(100) NOT NULL, contact_phone VARCHAR(100) NOT NULL, location VARCHAR(100) NOT NULL, website VARCHAR(100) NOT NULL);";

    db.query(
        createHighshcool,
        (err:Error) => {
            if (err) throw err;
            
            res.send('Table created!');
        }
    );
};
// insert into highschool table
const insertHighschool = (
    req: Request,
    res: Response
) => {
    const insertIntoHighschool = "INSERT INTO highschools (center_name, contact_phone, location, website) VALUES ('highschool1', '111-222-333', 'C/1 meh,3', 'www.website1.com'),('highschool2', '333-222-111', 'C/2 meh,23', 'www.website2.com'),('highschool3', '222-111-333', 'C/3 meh,2', 'www.website3.com'),('highschool4', '222-333-111', 'C/4 meh,239', 'www.website4.com');";

    db.query(
        insertIntoHighschool,
        (err:Error) => {
            if (err) throw err;

            res.send('highschools inserted in the database!');
        }
    );
};

// display highschool table
const displayHighschool = (
    req: Request,
    res: Response
) => {

    const displayHighshcool = 'SELECT * FROM highschools;';

    db.query(
        displayHighshcool,
        (
            err:Error,
            result: any    
        ) => {
            if (err) throw err;

            res.send(result);
        }
    );
};

module.exports = {
    // createDatabase,
    createHighschool,
    insertHighschool,
    displayHighschool
}