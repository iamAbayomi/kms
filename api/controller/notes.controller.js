/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const db = require('../models')
const Notes = db.notes

exports.createNotes = (req, res) => {
  const notes = {
    notes_title: req.notes_title,
    notes_contents: req.body.notes_contents,
    notes_delta: req.notes_delta,
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
      res.send({ comments: data })
    }).catch((err) => {
      res.status(500).send({
        message: 'Error retrieving notes for the user=' + err
      })
    })
}

// Retrieve single user from database
exports.findSingleNotes = (req, res) => {
  const notes_id = req.params.notes_id

  Notes.find({
    where: {
      notes_id
    }
  }).then((data) => {
    console.log(data)
    res.send({
      data
    })
  })
    .catch((err) => {
      res.status(500).send({
        message: err.message + 'Error retrieivng Notes with id=' + userid
      })
    })
}

exports.updateNotes = (req, res) => {
  const needs_id = req.params.text_id

  Notes.update(req.body, {
    where: { needs_id }
  }).then((num) => {
    console.log(num)
    if (num == 1) {
      res.send({
        message: 'Notes was updated Successfully'
      })
    } else {
      res.send({
        message: 'Cannot update Notes with id= ' + needs_id + 'Maybe Notes was not found ' +
        'or request body is empty!'
      })
    }
  }).catch((err) => {
    res.status(500).send({
      message: err.message + 'Error updating Notes with id=' + needs_id
    })
  })
}
