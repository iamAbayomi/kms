/* eslint-disable node/handle-callback-err */
/* eslint-disable no-console */

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://root:aLebZrmib8hca8Sl@cluster0.yn8mm.mongodb.net/databaseProject')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', function () {
  // we're connected!
  console.log('We are connected')
})

const studentsSchema = new mongoose.Schema({})
const Student = mongoose.model('Students', studentsSchema, 'Students')

const coursesSchema = new mongoose.Schema({})
const Courses = mongoose.model('Courses', coursesSchema, 'Courses')

const resultsSchema = new mongoose.Schema({})
const Results = mongoose.model('Results', resultsSchema, 'Results')

Student.find({})
  .then((data) => {
    // res.send(data)
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })

Courses.find({})
  .then((data) => {
    // res.send(data)
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })

Results.find({})
  .then((data) => {
    // res.send(data)
    console.log(data)
  })
  .catch((err) => {
    console.log(err)
  })
