module.exports = (app) => {
  const data = require('./index')
  const router = require('express').Router()

  // Retrieve the all notes of one User
  router.get('/students', data.sendStudents)

  router.get('/results', data.sendResults)

  router.get('/courses', data.sendCourses)

  app.use('/dbwork', router)
}
