import { getAllPublicBlogs, getUserSelectedBlog } from '../controllers/blog-controller'
import express from 'express'
const publicBlogRoutes = express.Router()
publicBlogRoutes.get('/blogs', getAllPublicBlogs)
publicBlogRoutes.get('/blogs/:id', getUserSelectedBlog)
export default publicBlogRoutes