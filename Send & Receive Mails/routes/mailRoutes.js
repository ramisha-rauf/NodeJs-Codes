const express= require('express')
const router = express.Router()
const { getbill} = require('../controller/mailController.js')

//router.post('/user/signup',signup)
router.post('/product/getbill',getbill)




module.exports= router