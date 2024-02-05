const router = require('express').Router()
const {getgmail} = require('../controller/gmailController')
router.post('/getgmail',getgmail)










module.exports = router