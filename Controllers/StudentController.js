const express = require('express');

const StudentModel = require('../DBModels/StudentModel');




async function createStudent(req, res){
    const data = new StudentModel({
        name : req.body.name,
        age : req.body.age
    })
    try{
        const dataSaved = await data.save();
        console.log(typeof(dataSaved._id));
        res.status(200).json(dataSaved)
    }
    catch(error){
        console.log(error);
        res.status(403).json({error : error.message});
    }
}

//To get ALl Student from Database

async function getAllStudents (req, res) {
    try{
        const allStudentsData = await StudentModel.find();
        res.status(200).json(allStudentsData);
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
}


//To get A student based on Id
async function getAStudent(req, res){
    try {
        const studentdata = await StudentModel.findById(req.params.id);
        res.status(200).json(studentdata);
    }catch(error){
       res.status(500).json({message : error.message})
    }
}


//To Update A Student
async function updateAStudent(req, res){
    try{
        const studentId = req.body.params;
        const updatedData = req.body;
        const result = await StudentModel.findByIdAndUpdate(studentId, updatedData, {new : true});
        res.send(result);
   }catch(error){
       res.status(404).json({mesage : "User Not Found"});
   }
}

//To Delete A Student
async function deleteAStudent(req, res){
    try{
        const id = req.params.id;
        const data = await StudentModel.findByIdAndDelete(id);
        res.send(`Document with ${data} has been deleted...`);
    }catch(error){
        res.status(400).json({
            message : error.mesage
        });
    }
}

module.exports = {createStudent, getAllStudents, getAStudent, updateAStudent, deleteAStudent};
