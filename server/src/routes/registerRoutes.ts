import {  login, signUp } from '../controllers/registeruser-controller'
import express from 'express'
const registerRoutes = express.Router()
registerRoutes.post('/signUp', signUp)
registerRoutes.post('/login', login)
export default registerRoutes