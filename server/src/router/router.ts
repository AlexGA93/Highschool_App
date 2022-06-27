
import express from 'express';
const router = express.Router();
const controller = require('../controllers/controllers');
// import { body } from 'express-validator';

router.get('/create-database', controller.createDatabase);

router.get('/create', controller.createHighschool);
router.get('/insert',controller.insertHighschool);
router.get('/display', controller.displayHighschool);


// create table by table
// router.get('/database/create/highschools');
// router.get('/database/create/teachers');
// router.get('/database/create/students');
// router.get('/database/create/subjects');
// router.get('/database/create/evaluations');
// router.get('/database/create/classrooms');



// router.get('/', controller.initialProcess);
// router.get('/getHighSchools', controller.getHighSchoolsTable);
// router.get('/database/full', controller.fullDatabase);
// router.get('/database/displayH', controller.displayHighSchools);


module.exports = router;