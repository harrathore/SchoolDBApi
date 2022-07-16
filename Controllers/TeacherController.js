const express = require('express')
const TeacherModel = require('../DBModels/TeacherModel')


async function getAll(req, res){
    res.send("All Teachers......");
}

async function createTeacher(req, res){
    const teacherDataModel = new TeacherModel({
        name : req.body.name,
        email : req.body.email,
        age : req.body.age
    });

    try{
        const resData = await teacherDataModel.save();
        res.status(201).json(resData);
    }catch(error){
        res.status(401).json({message : error.message});
    }
}
module.exports = {getAll, createTeacher};