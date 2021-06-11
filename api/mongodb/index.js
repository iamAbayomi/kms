/* eslint-disable node/handle-callback-err */
/* eslint-disable no-console */

const mongoose = require('mongoose')
mongoose.connect(`mongodb+srv://root:${process.env.MONGO_DB_PASSWORD}@cluster0.yn8mm.mongodb.net/databaseProject`)

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

exports.sendStudents = (req, res) => {
  Student.find({})
    .then((data) => {
      res.send(data)
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
      res.send(err)
    })
}

exports.sendCourses = (req, res) => {
  Courses.find({})
    .then((data) => {
      res.send(data)
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.sendResults = (req, res) => {
  Results.find({})
    .then((data) => {
      res.send(data)
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
}
