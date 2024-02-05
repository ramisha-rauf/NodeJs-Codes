const express = require('express')
const userController = require('../controller/users')
const Router = express.Router()
//MVC
Router
 .get('/users', userController.getAllUsers)
 .get('/users/:id', userController.getUsers)
 .post('/user', userController.createUsers)
 .put('/users/:id', userController.replaceUsers)
 .patch('/users/:id', userController.updateUsers)
 .delete('/users/:id', userController.deleteUsers)

exports.Router = Router