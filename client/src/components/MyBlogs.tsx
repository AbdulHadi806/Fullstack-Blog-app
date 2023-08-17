import React, { useEffect } from 'react'
import { IMyBlogType } from '../interface/Iblogs'
import { useFetchBlogsByUserQuery, useGetUserSelectedBlogMutation } from '../redux/apiCalls/blogApi'
import { getUserBlogById } from '../redux/slice/blogSlice'
import {  useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
function MyBlogs() {
    const {data} = useFetchBlogsByUserQuery(0)
    const [getUserSelectedBlog] = useGetUserSelectedBlogMutation()
    const dispatch = useDispatch()
    // const sendIdHandler = async(id:string) => {
    //     const response:any = await getUserSelectedBlog(id)
    //     dispatch(getUserBlogById(response.data))
    // }
    useEffect(() => {
        console.log(data,":data")
    }, [data])
    return (
        <>
         <h3>My Blogs</h3>
         {data && data.map((item: IMyBlogType) => {
            return (
                <div className='pt-4 border rounded my-5 p-3'>
                <Link to={`/MyBlogs/${item._id}`} className='text-start' >
                    <img src={`http://localhost:8000/images/${item.image}`} alt={`${item.title}`} />
                <h2 className='text-4xl'>{item.title}</h2>
                <p className='text-[21px] pt-3'>{item.description}</p>
                </Link>
                </div>
            )
         })}
        </>
    )
}

export default MyBlogs
