import upload from '../utils/multerConfig'
import { getMyBlogs, getUserSelectedBlog, postBlogs } from '../controllers/blog-controller'
import express from 'express'
const blogRoutes = express.Router()

blogRoutes.route('/blog').post(upload.single('image'),postBlogs)
blogRoutes.get('/blog', getMyBlogs)


export default blogRoutes