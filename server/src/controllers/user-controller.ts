import { Request, Response } from 'express'
import User from "../model/user"; 
export const getUserProfile = async(req:Request, res:Response) => {
    try {
        const data = await User.findById(req.user._id).select('aboutme email createdAt user')
        return res.status(200).json(data)
    } catch(err) {
        res.status(404).json({ err, status: "Failed" });
    }
}