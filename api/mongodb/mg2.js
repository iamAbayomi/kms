/* eslint-disable node/handle-callback-err */
/* eslint-disable no-console */
const express = require('express')
const app = express()
// Init body-parser options (inbuilt with express)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://root:aLebZrmib8hca8Sl@cluster0.yn8mm.mongodb.net/'

MongoClient.connect(uri, function (err, datab) {
  if (err) { throw err }
  const db = datab.db('databaseProject')
  // console.log('data' + datab)

  app.get('/dbwork/students', (req, res) => {
    db.collection('Students').find().toArray()
      .then((results) => {
        res.send(results)
        console.log(results)
      })
      .catch(error => console.error('This is the error' + error))
  })

  app.get('/dbwork/courses', (req, res) => {
    db.collection('Courses').find().toArray()
      .then((results) => {
        res.send(results)
        console.log(results)
      })
      .catch(error => console.error('This is the error' + error))
  })

  app.get('/dbwork/results', (req, res) => {
    db.collection('Results').find().toArray()
      .then((results) => {
        res.send(results)
        console.log(results)
      })
      .catch(error => console.error('This is the error' + error))
  })

})

console.log('lo')
