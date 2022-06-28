
import express from 'express';
const router = express.Router();
const controller = require('../controllers/controllers');
// import { body } from 'express-validator';

router.get('/database/create/restore-database', controller.createDatabase);

// ACTIONS BY ROLE - ADMIN

// table creation
router.post('/database/create-highschools', controller.createHighschool);
router.post('/database/create-teachers', controller.createHighschool);
router.post('/database/create-students', controller.createHighschool);
router.post('/database/create-subjects', controller.createHighschool);
router.post('/database/create-evaluations', controller.createHighschool);
router.post('/database/create-classrooms', controller.createHighschool);
// insert data
router.post('/database/insert-into-highschools', controller.createHighschool);
router.post('/database/insert-into-teachers', controller.createHighschool);
router.post('/database/insert-into-students', controller.createHighschool);
router.post('/database/insert-into-subjects', controller.createHighschool);
router.post('/database/insert-into-evaluations', controller.createHighschool);
router.post('/database/insert-into-classrooms', controller.createHighschool);
// update data
router.put('/database/modify-highschools', controller.createHighschool);
router.put('/database/modify-teachers', controller.createHighschool);
router.put('/database/modify-students', controller.createHighschool);
router.put('/database/modify-subjects', controller.createHighschool);
router.put('/database/modify-evaluations', controller.createHighschool);
router.put('/database/modify-classrooms', controller.createHighschool);

// delete data
router.delete('/database/delete-highschools', controller.createHighschool);
router.delete('/database/delete-teachers', controller.createHighschool);
router.delete('/database/delete-students', controller.createHighschool);
router.delete('/database/delete-subjects', controller.createHighschool);
router.delete('/database/delete-evaluations', controller.createHighschool);
router.delete('/database/delete-classrooms', controller.createHighschool);


// ACTIONS BY ROLE - USER(TEACHERS ,S TUDENT)

// display data
router.get('/database/display-highschools', controller.createHighschool);
router.get('/database/display-teachers', controller.createHighschool);
router.get('/database/display-students', controller.createHighschool);
router.get('/database/display-subjects', controller.createHighschool);
router.get('/database/display-evaluations', controller.createHighschool);
router.get('/database/display-classrooms', controller.createHighschool);


module.exports = router;