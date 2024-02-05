const blogModel = require("../model/blog")

exports.getAllBlogs = async()=>{
      return await blogModel.find();
}

exports.updateBlog= async(id, blog)=>{
    return await blogModel.findByIdAndUpdate(id, blog);
}

exports.getBlogById= async(id)=>{
    return await blogModel.findById(id);
}

exports.createBlog= async(blog)=>{
    return await blogModel.create(blog);
}

exports.deleteBlog= async(id)=>{
    return await blogModel.findByIdAndDelete(id);
}