const express = require('express');
const StudentModel = require('../DBModels/StudentModel');
const router = express.Router();

const TeacherModel = require('../DBModels/TeacherModel')

const {getAll, createTeacher} = require('../Controllers/TeacherController')


router.get('/all', getAll);


router.post('/create', createTeacher);

module.exports = router;