import { NextFunction, Request, Response } from "express"
import Blog from "../model/blog"

export const postBlogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const photo:any = req.file;

        const newBlog = new Blog({
            title: req.body.title,
            category: req.body.category,
            description: req.body.blog,
            createdAt: Date.now(),
            image: photo.filename,
            user: req.user._id
        })
        await newBlog.save()
        res.status(200).json({ status: "blog uploaded", newBlog })
    } catch (err) {
        res.status(500).json({ status: "Unsuccesful to upload blog", err })
    }
}

export const getAllPublicBlogs = async(req:Request, res:Response, next:NextFunction) => {
    try {
        const blogs = await Blog.find({})
        res.status(200).json(blogs)
    } catch(err) {
        res.status(500).json(err)
    }
}

export const getMyBlogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const myBlogs = await Blog.find({ user: req.user._id })
        return res.status(200).json(myBlogs)
    } catch (err) {
        res.status(500).json({ status: "Unsuccesful to get Blogs", err })
    }
}
export const getUserSelectedBlog = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const _id = req.params.id
        const searchBlog = await Blog.findById(_id)
        res.status(200).json(searchBlog)
    } catch (err) {
        console.log(err)
    }
}
export const searchUserBlogs = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
    } catch(err) {
        console.log(err)
    }
}