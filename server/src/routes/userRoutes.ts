import { getUserProfile } from '../controllers/user-controller'
import express from 'express'
const userRoutes = express.Router()

userRoutes.get('/profile', getUserProfile)


export default userRoutes