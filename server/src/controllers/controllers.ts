import {Request, Response} from 'express';
const { validationResult } = require('express-validator');
const db = require('../database/database');
require('dotenv').config();

import fs from 'fs';
import path from 'path';

// Add new Teacher
const addNewTeacher = (req: Request, res: Response) => {

    let {role, first_name, second_name, age, email, password, contact_phone, educational_center} = req.body;

    const teacherInsertion = `INSERT INTO teachers(role, first_name, second_name, age, email, password, contact_phone, educational_center) VALUES(${role}, ${first_name}, ${second_name}, ${age}, ${email}, ${password}, ${contact_phone}, ${educational_center});`;
    
    db.query(teacherInsertion, (err: Error)=>{
        if (err) throw err;
        console.log(`${first_name} ${second_name} has been inserted in the database!`);
        res.json({msg:`Teacher called ${first_name} ${second_name} has been inserted in the database!`});
    });
};
// Add new Student
const addNewStudent = (req: Request, res: Response) => {
    let {role, first_name, second_name, age, email, password, contact_phone} = req.body;

    const studentInsertion = `INSERT INTO students(role, first_name, second_name, age, email, password, contact_phone) VALUES(${role}, ${first_name}, ${second_name}, ${age}, ${email}, ${password}, ${contact_phone});`;
    
    db.query(studentInsertion, (err: Error)=>{
        if (err) throw err;
        console.log(`${first_name} ${second_name} has been inserted in the database!`);
        res.json({msg:`${first_name} ${second_name} has been inserted in the database!`});
    });
};

// CREATE TABLES
const createHighschool = ( // create highschool table
    req: Request,
    res: Response
) => {

    const createHighshcool = "CREATE TABLE IF NOT EXISTS highschools(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, center_name VARCHAR(100) NOT NULL, contact_phone VARCHAR(100) NOT NULL, location VARCHAR(100) NOT NULL, website VARCHAR(100) NOT NULL);";

    db.query(
        createHighshcool,
        (err:Error) => {
            if (err) throw err;
            
            res.send('Table highschools created!');
        }
    );
};
const createTeacher = ( // create teachers table
    req: Request,
    res: Response
) => {

    const createHighshcool = "CREATE TABLE teachers(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, role VARCHAR(100) NOT NULL, first_name VARCHAR(100) NOT NULL, second_name VARCHAR(100) NOT NULL, age int NOT NULL, email VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL, contact_phone VARCHAR(100) NOT NULL, educational_center INT NOT NULL, FOREIGN KEY(educational_center) REFERENCES highschools(id));";

    db.query(
        createHighshcool,
        (err:Error) => {
            if (err) throw err;
            
            res.send('Table teachers created!');
        }
    );
};
const createStudent = ( // create students table
    req: Request,
    res: Response
) => {

    const createHighshcool = "CREATE TABLE students(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, role VARCHAR(100) NOT NULL, first_name VARCHAR(100) NOT NULL, second_name VARCHAR(100) NOT NULL, age int NOT NULL, email VARCHAR(100) NOT NULL, password VARCHAR(100) NOT NULL, contact_phone VARCHAR(100) NOT NULL);";

    db.query(
        createHighshcool,
        (err:Error) => {
            if (err) throw err;
            
            res.send('Table students created!');
        }
    );
};
const createSubjects = (// create subjects table
    req: Request,
    res: Response
) => {
    const createEvaluation = "CREATE TABLE subjects(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, subject_name VARCHAR(100) NOT NULL, qualification FLOAT NOT NULL, student_id INT NOT NULL, FOREIGN KEY(student_id) REFERENCES students(id));";

    db.query(
        createEvaluation,
        (err: Error)=>{
            if (err) throw err;

            res.send('Table subjects created!');
        }
    );
};
const createEvaluations = (// create evaluations table
    req: Request, 
    res: Response
) => {
    const createEvaluation = "CREATE TABLE evaluations(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, subject_name VARCHAR(100) NOT NULL, final_qualification FLOAT NOT NULL, student_id INT NOT NULL, FOREIGN KEY(student_id) REFERENCES students(id));";

    db.query(
        createEvaluation,
        (err: Error)=>{
            if (err) throw err;

            res.send('Table evaluations created!');
        }
    );
};
const createClassrooms = (// create classrooms table
    req: Request, 
    res: Response
) => {
    const createEvaluation = "CREATE TABLE classrooms(id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, teacher_id INT NOT NULL, student_id INT NOT NULL, FOREIGN KEY(teacher_id) REFERENCES teachers(id), FOREIGN KEY(student_id) REFERENCES students(id));";

    db.query(
        createEvaluation,
        (err: Error)=>{
            if (err) throw err;

            res.send('Table classrooms created!');
        }
    );
};

// INSERT DATA IN TABLES
const insertHighschool = (// insert into highschool
    req: Request,
    res: Response
) => {
    let {center_name, contact_phone, location, website} = req.body;

    const highschoolInsertion = `INSERT INTO highschools(center_name, contact_phone, location, website) VALUES(${center_name}, ${contact_phone}, ${location}, ${website});`;

    db.query(highschoolInsertion, (err: Error)=>{
        if (err) throw err;
        console.log(`${center_name} inserted in the database!`);
        res.json({msg:`Educational Center: ${center_name} has been inserted in the database!`});
    });
};

const insertTeacher = (// insert into teachers
    req: Request,
    res: Response
) => {
    let {first_name, second_name, age, email, password, contact_phone, educational_center} = req.body;

    const highschoolInsertion = `INSERT INTO teachers(role, first_name, second_name, age, email, password, contact_phone, educational_center) VALUES(${'teacher'}, ${first_name}, ${second_name}, ${age}, ${email}, ${password}, ${contact_phone}, ${educational_center});`;

    db.query(highschoolInsertion, (err: Error)=>{
        if (err) throw err;
        console.log(`${first_name} inserted in the database!`);
        res.json({msg:`Teacher: ${first_name} ${second_name} has been inserted in the database!`});
    });
};

const insertStudent = (// insert into students
    req: Request,
    res: Response
) => {
    let {first_name, second_name, age, email, password, contact_phone} = req.body;

    const highschoolInsertion = `INSERT INTO students(role, first_name, second_name, age, email, password, contact_phone) VALUES(${'student'}, ${first_name}, ${second_name}, ${age}, ${email}, ${password}, ${contact_phone});`;

    db.query(highschoolInsertion, (err: Error)=>{
        if (err) throw err;
        console.log(`${first_name} inserted in the database!`);
        res.json({msg:`Student: ${first_name} ${second_name} has been inserted in the database!`});
    });
};

const insertSubject = (// insert into subjects
    req: Request,
    res: Response
) => {
    let {subject_name, qualification} = req.body;

    let extractUserId = `SELECT st.id FROM students st LEFT JOIN subjects sub ON st.id=sub.student_id;`;

    db.query(extractUserId, (err: Error, result: any)=>{
        if (err) throw err;
        // console.log("extracted id: "+result[0].id);
        
        const subjectInsertion = `INSERT INTO subjects(subject_name, qualification, student_id) VALUES('${subject_name}', ${qualification}, '${result[0].id}')`;
        
        db.query(subjectInsertion, (err: Error)=>{
            if (err) throw err;
            console.log(`${subject_name} inserted in the database!`);
            res.json({msg:`Subject: ${subject_name} has been inserted in the database!`});
        });

    });

    

    // const subjectInsertion = `INSERT INTO subjects(subject_name, qualification, student_id) VALUES(${subject_name}, ${qualification}, ${userId["id"]})`;

    // db.query(subjectInsertion, (err: Error)=>{
    //     if (err) throw err;
    //     console.log(`${subject_name} inserted in the database!`);
    //     res.json({msg:`Subject: ${subject_name} has been inserted in the database!`});
    // });
};


const insertEvaluations = (req: Request, res: Response) => {};
const insertClassroom = (req: Request, res: Response) => {};








// // insert into highschool table
// const insertHighschool = (
//     req: Request,
//     res: Response
// ) => {
//     const insertIntoHighschool = "INSERT INTO highschools (center_name, contact_phone, location, website) VALUES ('highschool1', '111-222-333', 'C/1 meh,3', 'www.website1.com'),('highschool2', '333-222-111', 'C/2 meh,23', 'www.website2.com'),('highschool3', '222-111-333', 'C/3 meh,2', 'www.website3.com'),('highschool4', '222-333-111', 'C/4 meh,239', 'www.website4.com');";

//     db.query(
//         insertIntoHighschool,
//         (err:Error) => {
//             if (err) throw err;

//             res.send('highschools inserted in the database!');
//         }
//     );
// };

// // display highschool table
// const displayHighschool = (
//     req: Request,
//     res: Response
// ) => {

//     const displayHighshcool = 'SELECT * FROM highschools;';

//     db.query(
//         displayHighshcool,
//         (
//             err:Error,
//             result: any    
//         ) => {
//             if (err) throw err;

//             res.send(result);
//         }
//     );
// };

module.exports = {

    addNewTeacher,
    addNewStudent,

    // createDatabase,
    createHighschool,
    createTeacher,
    createStudent,
    createSubjects,
    createEvaluations,
    createClassrooms,   
    
    // test
    insertStudent,
    insertSubject,

    // insertHighschool,
    // displayHighschool
}