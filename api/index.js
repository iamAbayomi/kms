/* eslint-disable no-console */
// Express
const express = require('express')
const app = express()
// Init body-parser options (inbuilt with express)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
// Initializing Database
const db = require('./models')
db.sequelize.sync({ alter: true })

// use cors
// require('./utilities/cors')(app)
// require('./cors')(app)

// Initializing MongoDb
// require('./mongodb/index')
require('./mongodb/mongo.routes')(app)

// require('./utilities/secretManager')

require('./routes/user.routes')(app)
require('./routes/admin.routes')(app)
require('./routes/product.routes')(app)
require('./routes/stage.routes')(app)

// Export the server middleware
module.exports = app
