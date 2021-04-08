// Express
const express = require('express')
const app = express()
// Init body-parser options (inbuilt with express)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Initializing Database
const db = require('./models')
db.sequelize.sync({ alter: true })

require('./routes/user.routes')
require('./routes/admin.routes')
require('./routes/notes.routes')

// Export the server middleware
module.exports = app
