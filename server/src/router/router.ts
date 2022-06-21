
import express from 'express';
const controller = require('../controllers/controllers');
import { body } from 'express-validator';
const router = express.Router();


router.get('/', controller.initialProcess);
// router.get('/', controller.initDatabase);
router.get('/getHighSchools', controller.getHighSchoolsTable);


module.exports = router;