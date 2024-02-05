const blogService = require('../services/blogServices')

exports.getAllBlogs = async(req,res)=>{
    try {
        const blogs = await blogService.getAllBlogs()
        res.json({data: blogs , status: "success"})
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}

exports.updateBlog = async(req,res)=>{
    try {
        const updatedblog = await blogService.updateBlog(req.params.id,req.body)
        res.json({data: updatedblog , status: "success"})
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}

exports.deleteBlog = async(req,res)=>{
    try {
        const deletedblog = await blogService.deleteBlog(req.params.id)
        res.json({data: deletedblog , status: "success"})
    } catch (err) {
        res.status(500).json({error:err.message})
    }
    // const id= req.params.id;
    // try{
    //     const doc = await blog.findOneAndDelete({_id:id})
    //     res.status(201).json(doc)
    // }
    // catch(err){
    //     console.log(err)
    //     res.status(400).json(err)
    // } 
}

exports.createBlog = async(req,res)=>{
    try {
        const createdblog = await blogService.createBlog(req.body)
        res.json({data: createdblog , status: "success"})
    } catch (err) {
        res.status(500).json({error:err.message})
    }
}

exports.getBlogById = async(req,res)=>{
    try {
        const getblog = await blogService.getBlogById(req.params.id)
        res.json({data: getblog , status: "success"})
    } catch (err) {
        res.status(500).json({error:err.message})
    }
//     const id = req.params.id
//     const blogs = await blog.findById(id)
//     res.json(blogs)
 }
