module.exports = (app) => {
  const needs = require('../controller/admin.controller')
  const router = require('express').Router()

  // Create a new Admin User
  router.post('/', needs.createAdmin)

  // Check if user is admin
  router.get('/:user_id', needs.checkAdmin)

  // Get the lists of admin
  router.get('/:note_id', needs.findlistsofAdmins)

  // Update Notes
  // router.put('/:note_id', needs.updateNotes)

  app.use('/apis/admin', router)
}
