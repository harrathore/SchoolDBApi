const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000


const bodyParser = require('body-parser')
app.use(express.json());

require('dotenv').config();


//Database Connection
const mongoString = process.env.DATABASE_URL

mongoose.connect(mongoString);
const database = mongoose.connection
database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})


//Routes All the requests over the site
const studentRoutes = require('./routes/StudentRoutes');
const teacherRoutes = require('./routes/TeacherRoutes');

app.use('/studentsApi', studentRoutes);

app.use('/teachersApi', teacherRoutes);


//Start the Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
