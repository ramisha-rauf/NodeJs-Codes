const express = require('express')
const morgan = require('morgan')   //3rd party middleware function
const server = express()
const mongoose = require('mongoose')
require('dotenv').config()

const productRouter = require('./routes/product')
const userRouter = require('./routes/users')

//db connection 
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb+srv://ramisha_rauf:proccess.env.DB_PASSWORD@cluster0.ilbtxal.mongodb.net/ecommerce');
  console.log('database connected')
}



//Body Parser
server.use(morgan('default'))
server.use(express.static('public'))   //use for static hosting
server.use(express.json());        //write above code in body of post request
server.use('/',productRouter.Router)
server.use('/u',userRouter.Router)  //http://localhost:8080/u/users request format





server.listen(process.env.PORT,()=>{               //portNO is saved in .env file
    console.log('server started')
})