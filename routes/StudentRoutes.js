const express = require('express');
const router = express.Router();


const StudentModel = require('../DBModels/StudentModel');

const {createStudent, getAllStudents, getAStudent, updateAStudent, deleteAStudent} = 
    require('../Controllers/StudentController');



//Post Method
router.post('/create', createStudent)

//Get all Method
router.get('/getAll', getAllStudents);


//Get by ID Method
router.get('/getOne/:id', getAStudent)


//Update by ID Method
router.patch('/update/:id', updateAStudent)


//Delete by ID Method
router.delete('/delete/:id', deleteAStudent)

module.exports = router;