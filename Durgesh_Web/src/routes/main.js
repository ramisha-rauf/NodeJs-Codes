const express = require('express')
const routes = express.Router()
const detailController = require('../controllers/detailController');

routes.get('/',(req,res)=>{
    res.render("index")
    //console.log("message from routes")
})

routes.get('/gallery',(req,res)=>{
    res.render("gallery")
})


routes.post('/detail', detailController.createDetail);

module.exports = routes