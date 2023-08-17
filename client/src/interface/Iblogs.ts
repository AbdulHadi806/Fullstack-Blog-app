import { UserDetails } from "./user";

export interface IBlogs {
    title: String,
    category: String,
    blog: String,
    selectedFile: any
}
export interface IMyBlogType {
    category: string,
    commentsSchema: string[],
    createdAt: String,
    description: String,
    title: String,
    updatedAt: string,
    user:string,
    __v: Number,
    _id:string,
    image: string
}