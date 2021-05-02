module.exports = (app) => {
  const needs = require('../controller/notes.controller')
  const router = require('express').Router()

  // Create a new Notes for Users
  router.post('/', needs.createNotes)

  // Retrieve the all notes of one User
  router.get('/:user_id', needs.findAllNotes)

  // Retrieve one note for one user
  router.get('/usernotes/:note_id', needs.findSingleNotes)

  // Update Notes
  router.put('/:note_id', needs.updateNotes)

  app.use('/apis/notes', router)
}
