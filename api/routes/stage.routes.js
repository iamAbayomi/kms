module.exports = (app) => {
  const stages = require('../controller/stage.controller')
  const router = require('express').Router()

  // Create a new Stages for Users
  router.post('/', stages.createStage)

  // Retrieve one stage for one user
  router.get('/userstage/:stage_id', stages.findSingleStage)

  // Retrieve the all stages of one User
  router.get('/:user_id/:product_id', stages.findAllStage)

  

  // Update Stages
  router.put('/:stage_id', stages.updateStage)

  // Delete Stages
  router.delete('/:stage_id', stages.deleteStage)

  app.use('/apis/stage', router)
}
