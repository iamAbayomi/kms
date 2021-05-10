/* eslint-disable node/handle-callback-err */
/* eslint-disable no-console */

const MongoClient = require('mongodb').MongoClient
const uri = 'mongodb+srv://root:aLebZrmib8hca8Sl@cluster0.yn8mm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
client.connect((err) => {
  const collection =
  client.db('databaseProject').collection('Courses')

  collection.find({}).toArray((err, docs) => {
    // if (err) {
    //     throw err;
    // }
    console.log('This are the documents' + docs)
  })

  console.log(collection)

  // perform actions on the collection object

  console.log('This are the errors' + err)

  client.close()
})
