const express = require('express')
const app = express()
app.use(express.json())
const routes = require('./routes/mailRoutes.js')

app.use('',routes)



app.listen('1160',()=>{
    console.log("server started")
})