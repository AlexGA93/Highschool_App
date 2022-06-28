
import express from 'express';
const router = express.Router();
const controller = require('../controllers/controllers');

// create full structure database
// router.get('/database/create/restore-database', controller.createDatabase);

// signup user
router.post('/database/add/teacher', controller.addNewTeacher);
router.post('/database/add/student', controller.addNewStudent);

// create tables
router.post('/database/create-highschools', controller.createHighschool);
router.post('/database/create-teacher', controller.createTeacher);
router.post('/database/create-student', controller.createStudent); 
router.post('/database/create-subjects', controller.createStudent);
router.post('/database/create-evaluations', controller.createEvaluations);
router.post('/database/create-classrooms', controller.createClassrooms);

// test
router.post('/insertSubject', controller.insertSubject);

// // ACTIONS BY ROLE - ADMIN

// // table creation

// // insert data
// router.post('/database/insert-into-highschools', controller.createHighschool);

// router.post('/database/insert-into-teachers', controller.createHighschool); // signup
// router.post('/database/insert-into-students', controller.createHighschool); // signup

// router.post('/database/insert-into-subjects', controller.createHighschool);
// router.post('/database/insert-into-evaluations', controller.createHighschool);
// router.post('/database/insert-into-classrooms', controller.createHighschool);
// // update data
// router.put('/database/modify-highschools', controller.createHighschool);
// router.put('/database/modify-teachers', controller.createHighschool);
// router.put('/database/modify-students', controller.createHighschool);
// router.put('/database/modify-subjects', controller.createHighschool);
// router.put('/database/modify-evaluations', controller.createHighschool);
// router.put('/database/modify-classrooms', controller.createHighschool);

// // delete data
// router.delete('/database/delete-highschools', controller.createHighschool);
// router.delete('/database/delete-teachers', controller.createHighschool);
// router.delete('/database/delete-students', controller.createHighschool);
// router.delete('/database/delete-subjects', controller.createHighschool);
// router.delete('/database/delete-evaluations', controller.createHighschool);
// router.delete('/database/delete-classrooms', controller.createHighschool);


// // ACTIONS BY ROLE - USER(TEACHERS ,S TUDENT)

// // display data
// router.get('/database/display-highschools', controller.createHighschool);
// router.get('/database/display-teachers', controller.createHighschool);
// router.get('/database/display-students', controller.createHighschool);
// router.get('/database/display-subjects', controller.createHighschool);
// router.get('/database/display-evaluations', controller.createHighschool);
// router.get('/database/display-classrooms', controller.createHighschool);


module.exports = router;