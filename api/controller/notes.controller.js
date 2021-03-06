/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const db = require('../models')
const Notes = db.notes

exports.createNotes = (req, res) => {
  const notes = {
    notes_title: req.body.notes_title,
    notes_contents: req.body.notes_contents,
    notes_delta: req.body.notes_delta,
    user_id: req.body.user_id
  }
  Notes.create(notes)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
              err.message || 'Some error occured while creating new Notes'
      })
    })
}

// Retreve all Notes belonging to User from the database
exports.findAllNotes = (req, res) => {
  const user_id = req.params.user_id
  Notes.findAll(
    {
      where: {
        user_id
      }
    }
  )
    .then((data) => {
      res.send(data)
    }).catch((err) => {
      res.status(500).send({
        message: 'Error retrieving notes for the user=' + err
      })
    })
}

// Retrieve single notes from database
exports.findSingleNotes = (req, res) => {
  const notes_id = req.params.note_id

  Notes.findOne({
    where: {
      notes_id
    }
  }).then((data) => {
    console.log(data)
    res.send(
      data
    )
  })
    .catch((err) => {
      res.status(500).send({
        message: err.message + 'Error retrieivng Notes with id=' + notes_id
      })
    })
}

exports.updateNotes = (req, res) => {
  const notes_id = req.params.note_id

  Notes.update(req.body, {
    where: { notes_id }
  }).then((num) => {
    console.log(num)
    if (num == 1) {
      res.send({
        message: 'Notes was updated Successfully'
      })
    } else {
      res.send({
        message: 'Cannot update Notes with id= ' + notes_id + 'Maybe Notes was not found ' +
        'or request body is empty!'
      })
    }
  }).catch((err) => {
    res.status(500).send({
      message: err.message + 'Error updating Notes with id=' + notes_id
    })
  })
}

exports.deleteNote = (req, res) => {
  const notes_id = req.params.note_id

  Notes.destroy({
    where: {
      notes_id
    }
  }).then((data) => {
    res.send({
      data
    })
  }).catch((err) => {
    res.status(500).send({
      message: err.message + 'Error deleting notes with id=' + notes_id
    })
  })
}
