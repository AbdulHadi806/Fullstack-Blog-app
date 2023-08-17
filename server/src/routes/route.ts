import express from 'express'
import registerRoutes from './registerRoutes'
import blogRoutes from './blogRoutes'
import { checkAuth } from '../utils/checkAuth'
import userRoutes from './userRoutes'
import publicBlogRoutes from './publicRoutes'
const Routes = express.Router()
Routes.use('/blogs', checkAuth,blogRoutes)
Routes.use('/registration', registerRoutes)
Routes.use("/user", checkAuth, userRoutes)
Routes.use("/public", publicBlogRoutes)
export default Routes