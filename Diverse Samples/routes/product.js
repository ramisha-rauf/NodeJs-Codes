const express = require('express')
const productController = require('../controller/product')
const Router = express.Router()
//MVC
Router
 .get('/products', productController.getAllProducts)
 .get('/products/:id', productController.getProduct)
 .post('/pro', productController.createProduct)
 .put('/products/:id', productController.replaceProduct)
 .patch('/products/:id', productController.updateProduct)
 .delete('/products/:id', productController.deleteProduct)

exports.Router = Router