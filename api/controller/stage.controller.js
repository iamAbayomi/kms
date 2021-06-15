/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const db = require('../models')
const Stage = db.stage

exports.createStage = (req, res) => {
  const stage = {
    stage_title: req.body.stage_title,
    stage_contents: req.body.stage_contents,
    stage_delta: req.body.stage_delta,
    user_id: req.body.user_id,
    product_id: req.body.product_id
  }
  Stage.create(stage)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
              err.message || 'Some error occured while creating new Stage'
      })
    })
}

// Retreve all Stage belonging to User from the database
exports.findAllStage = (req, res) => {
  const user_id = req.params.user_id
  Stage.findAll(
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
        message: 'Error retrieving stage for the user=' + err
      })
    })
}

// Retrieve single stage from database
exports.findSingleStage = (req, res) => {
  const stage_id = req.params.stage_id

  Stage.findOne({
    where: {
      stage_id
    }
  }).then((data) => {
    console.log(data)
    res.send(
      data
    )
  })
    .catch((err) => {
      res.status(500).send({
        message: err.message + 'Error retrieivng Stage with id=' + stage_id
      })
    })
}

exports.updateStage = (req, res) => {
  const stage_id = req.params.stage_id

  Stage.update(req.body, {
    where: { stage_id }
  }).then((num) => {
    console.log(num)
    if (num == 1) {
      res.send({
        message: 'Stage was updated Successfully'
      })
    } else {
      res.send({
        message: 'Cannot update Stage with id= ' + stage_id + 'Maybe Stage was not found ' +
        'or request body is empty!'
      })
    }
  }).catch((err) => {
    res.status(500).send({
      message: err.message + 'Error updating Stage with id=' + stage_id
    })
  })
}

exports.deleteStage = (req, res) => {
  const stage_id = req.params.stage_id

  Stage.destroy({
    where: {
      stage_id
    }
  }).then((data) => {
    res.send({
      data
    })
  }).catch((err) => {
    res.status(500).send({
      message: err.message + 'Error deleting stage with id=' + stage_id
    })
  })
}
