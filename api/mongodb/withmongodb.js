/* eslint-disable node/handle-callback-err */
/* eslint-disable no-console */
const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://root:aLebZrmib8hca8Sl@cluster0.yn8mm.mongodb.net/'

MongoClient.connect(uri, function (err, datab) {
  if (err) { console.log(err) }
  const db = datab.db('databaseProject')
  // console.log('data' + datab)

  exports.sendStudents = (req, res) => {
    db.collection('Students').find().toArray()
      .then((results) => {
        res.send(results)
        console.log(results)
      })
      .catch(error => console.error('This is the error' + error))
  }

  exports.sendCourses = (req, res) => {
    db.collection('Courses').find().toArray()
      .then((results) => {
        res.send(results)
        console.log(results)
      })
      .catch(error => console.error('This is the error' + error))
  }

  exports.sendResults = (req, res) => {
    db.collection('Results').find().toArray()
      .then((results) => {
        res.send(results)
        console.log(results)
      })
      .catch(error => console.error('This is the error' + error))
  }
})

console.log('lo')
