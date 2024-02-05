const express = require('express')
const app = express()
app.use(express.json())
const route = require('./route/gmailRoute')
app.use('',route)







app.listen('1170',()=>{
    console.log("server started")
})