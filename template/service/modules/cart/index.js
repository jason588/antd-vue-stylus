/* eslint-disable import/no-commonjs */
const express = require('express')
const {
  db
} = require('../../db')

const router = express.Router()

const getProduct = (id) => {
  const result = db.get('products')
    .find({
      id: parseInt(id, 10)
    })
    .value()
  return result
}

const addCartItem = (item) => {
  const result = db.get('cart.items')
    .push(item)
    .write()
  return result
}
const getCartItem = (id) => {
  const result = db.get('cart.items')
    .find({
      product_id: parseInt(id)
    })
    .value()
  return result
}
const updateCartItem = (id, item) => {
  const result = db.get('cart.items')
    .find({
      product_id: parseInt(id)
    })
    .assign(item)
    .write()
  return result
}

const updateCartTotal = () => {
  const total = db.get('cart.items')
    .map('total')
    .value()
  const value = total.reduce((v1, v2) => {
    return v1 + v2
  }, 0)

  db.get('cart')
    .assign({
      total: value
    })
    .write()
}

router.post('/cart-item', (req, res) => {
  const product_id = parseInt(req.body.product_id, 10)
  const quantity = parseInt(req.body.quantity, 10)

  const product = getProduct(product_id)

  if (!product) {
    res.sendStatus('404')
    return
  }
  const {
    name,
    price,
    images
  } = product
  const total = parseInt(price) * parseInt(quantity)

  let item = {
    product_id,
    name,
    images: images[0].src,
    price,
    quantity,
    total
  }

  const result = getCartItem(product_id)

  if (result) {
    item.quantity = parseInt(quantity) + parseInt(result.quantity)
    item.total = total + parseInt(result.total)

    updateCartItem(product_id, item)
  } else {
    addCartItem(item)
    res.sendStatus('201')
  }

  updateCartTotal()
  res.jsonp('success')

})


module.exports = router
