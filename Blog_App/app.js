require('dotenv').config()
const express = require('express')
//const { concat } = require('lodash')
const mongoose = require('mongoose')
const blogRouter = require('./routes/blogRoutes')
//const blogModel = require("./model/blog")
//const router = require('router')


//blog by id
// router.use('/get/:id',async(req,res)=>{ 
//     const blogbyid=await blogModel.findById(req.params.id)
//     res.send(blogbyid)
//     }
// )

// //all blogs
// router.use('/getBlogs',async(req,res)=>{ 
//     const allblogs=await blogModel.find();
//     res.send(allblogs)
//     }
// )

// //update
// router.use('/update/:id',async(req,res)=>{ 
//     const updatedblog=await blogModel.findByIdAndUpdate(req.param.id, req.body);
//     res.send(updatedblog)
//     }
// )

// //create
// router.use('/newBlog',async(req,res)=>{ 
//     const newblog=await blogModel.create(req.body);
//     res.send(newblog)
//     }
// )

// //delete
// router.use('/delete',async(req,res)=>{ 
//     const updatedblog=await blogModel.findByIdAndDelete(req.param.id);
//     res.send(updatedblog)
//     }
// )


server = express()
server.use(express.json())
server.use('',blogRouter)


main().catch(error=>console.log(error));
async function main(){
    await mongoose.connect('mongodb+srv://ramisha_rauf:yvExpeUuCx6PTAsh@cluster0.ilbtxal.mongodb.net/ecommerce')
    console.log("MongoDB Connected")
}


server.listen(3002,()=>{
    console.log("SERVER STARTED")
})

module.exports=server;