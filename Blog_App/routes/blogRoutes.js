const express = require('express')
const router = express.Router()

const{
    getAllBlogs,
    getBlogById,
    deleteBlog,
    updateBlog,
    createBlog
} = require('../controllers/blogController')

router.route("/getBlog").get(getAllBlogs);
router.route("/getBlogById/:id").get(getBlogById);
router.route("/deleteBlog/id").delete(deleteBlog);
router.route("/updateBlog").post(updateBlog);
router.route("/createBlog").post(createBlog);

module.exports = router