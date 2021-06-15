module.exports = (app) => {
  const product = require('../controller/product.controller')
  const router = require('express').Router()

  // Create a new Product for Users
  router.post('/', product.createProduct)

  // Retrieve the all product of one User
  router.get('/:user_id', product.findAllProduct)

  // Retrieve one product for one user
  router.get('/userproduct/:product_id', product.findSingleProduct)

  // Update Product
  router.put('/:product_id', product.updateProduct)

  // Delete Product
  router.delete('/:product_id', product.deleteNote)

  app.use('/apis/product', router)
}
