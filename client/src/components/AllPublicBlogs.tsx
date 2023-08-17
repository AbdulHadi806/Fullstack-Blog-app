import React, { useEffect } from 'react'
import { useFetchAllBlogsQuery } from '../redux/apiCalls/blogApi'
import { Link } from 'react-router-dom'
import { IMyBlogType } from '../interface/Iblogs'

function AllPublicBlogs() {
  const { data } = useFetchAllBlogsQuery(0)

  return (
    <div>
      <>
        <h3>All Blogs</h3>
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
    </div>
  )
}

export default AllPublicBlogs
