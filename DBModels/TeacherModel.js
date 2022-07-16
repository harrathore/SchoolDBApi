const mongoose = require('mongoose');


const teacherSchema = new mongoose.Schema({

    name : {
        required : true,
        type : String
    },

    email : {
        required : true,
        type : String
    },
    
    age : {
        required : true,
        type: Number
    }
});

module.exports = mongoose.model('TeacherData', teacherSchema);