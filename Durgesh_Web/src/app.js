require('dotenv').config()
const express = require('express')
const hbs = require('hbs')
const mongoose = require('mongoose')
const server = express()
const routes = require('./routes/main')
//const Detail = require('./models/Details')

//db connection
main().catch(err => console.log(err));
async function main() {
  await  mongoose.connect("mongodb+srv://ramisha_rauf:yvExpeUuCx6PTAsh@cluster0.ilbtxal.mongodb.net/") 
  console.log('database connected')
}

server.use(express.json()) 
server.use('/static',express.static("public"))  //localhost:3000/static/css/style.css or /images/...
server.use('',routes)

//template engines
server.set('view engine','hbs')
server.set("views","views")
hbs.registerPartials("views/partials")  //partials use to create UI elements like footer,navbar etc


server.listen(4100,()=>{
    console.log("server started")
})