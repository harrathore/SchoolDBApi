const express = require('express');
const StudentModel = require('../DBModels/StudentModel');
const router = express.Router();

const TeacherModel = require('../DBModels/TeacherModel')

const {getAll, createTeacher, getATeacher} = require('../Controllers/TeacherController')


router.get('/all', getAll);


router.post('/create', createTeacher);

router.get('/teacher/:id', getATeacher);

module.exports = router;