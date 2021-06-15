/* eslint-disable eqeqeq */
/* eslint-disable camelcase */
/* eslint-disable no-console */
const db = require('../models')
const Product = db.product

exports.createProduct = (req, res) => {
  const product = {
    product_name: req.body.product_name,
    user_id: req.body.user_id
  }
  Product.create(product)
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message:
              err.message || 'Some error occured while creating new Product'
      })
    })
}

// Retreve all Product belonging to User from the database
exports.findAllProduct = (req, res) => {
  const user_id = req.params.user_id
  Product.findAll(
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
        message: 'Error retrieving product for the user=' + err
      })
    })
}

// Retrieve single product from database
exports.findSingleProduct = (req, res) => {
  const product_id = req.params.product_id

  Product.findOne({
    where: {
      product_id
    }
  }).then((data) => {
    console.log(data)
    res.send(
      data
    )
  })
    .catch((err) => {
      res.status(500).send({
        message: err.message + 'Error retrieivng Product with id=' + product_id
      })
    })
}

exports.updateProduct = (req, res) => {
  const product_id = req.params.product_id

  Product.update(req.body, {
    where: { product_id }
  }).then((num) => {
    console.log(num)
    if (num == 1) {
      res.send({
        message: 'Product was updated Successfully'
      })
    } else {
      res.send({
        message: 'Cannot update Product with id= ' + product_id + 'Maybe Product was not found ' +
        'or request body is empty!'
      })
    }
  }).catch((err) => {
    res.status(500).send({
      message: err.message + 'Error updating Product with id=' + product_id
    })
  })
}

exports.deleteProduct = (req, res) => {
  const product_id = req.params.product_id

  Product.destroy({
    where: {
      product_id
    }
  }).then((data) => {
    res.send({
      data
    })
  }).catch((err) => {
    res.status(500).send({
      message: err.message + 'Error deleting product with id=' + product_id
    })
  })
}
