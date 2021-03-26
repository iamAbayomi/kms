/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const db = require('../models')
const Admin = db.admin

exports.createAdmin = (req, res) => {
  const admin = {
    fullname: req.body.fullname,
    firstname: req.body.firstname,
    surname: req.body.surname,
    email: req.body.email
  }
  Admin.create(admin)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
              err.message || 'Some error occured while creating new Admin'
      })
    })
}

// Retreve all Admin belonging to User from the database
exports.findlistsofAdmins = (req, res) => {
  const user_id = req.params.user_id
  Admin.findAll(
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
        message: 'Error retrieving admin for the user=' + err
      })
    })
}

// Retrieve single user from database
exports.findSingleAdmin = (req, res) => {
  const admin_id = req.params.admin_id

  Admin.find({
    where: {
      admin_id
    }
  }).then((data) => {
    console.log(data)
    res.send({
      data
    })
  })
    .catch((err) => {
      res.status(500).send({
        message: err.message + 'Error retrieivng Admin with id=' + userid
      })
    })
}

exports.updateAdmin = (req, res) => {
  const needs_id = req.params.text_id

  Admin.update(req.body, {
    where: { needs_id }
  }).then((num) => {
    console.log(num)
    if (num == 1) {
      res.send({
        message: 'Admin was updated Successfully'
      })
    } else {
      res.send({
        message: 'Cannot update Admin with id= ' + needs_id + 'Maybe Admin was not found ' +
        'or request body is empty!'
      })
    }
  }).catch((err) => {
    res.status(500).send({
      message: err.message + 'Error updating Admin with id=' + needs_id
    })
  })
}
