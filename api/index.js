// Express
const express = require('express')
const app = express()
// Init body-parser options (inbuilt with express)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Initializing Database
const db = require('./models')
// db.sequelize.sync({ alter: true })

require('./routes/user.routes')(app)
require('./routes/admin.routes')(app)
require('./routes/notes.routes')(app)

// Export the server middleware
module.exports = app
