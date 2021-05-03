module.exports = (app) => {
  const notes = require('../controller/notes.controller')
  const router = require('express').Router()

  // Create a new Notes for Users
  router.post('/', notes.createNotes)

  // Retrieve the all notes of one User
  router.get('/:user_id', notes.findAllNotes)

  // Retrieve one note for one user
  router.get('/usernotes/:note_id', notes.findSingleNotes)

  // Update Notes
  router.put('/:note_id', notes.updateNotes)

  // Delete Notes
  router.delete('/:note_id', notes.deleteNote)

  app.use('/apis/notes', router)
}
