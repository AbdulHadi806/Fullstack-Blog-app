import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { IMyBlogType } from '../interface/Iblogs'
import { useParams } from 'react-router-dom';
import { useGetUserSelectedBlogMutation } from '../redux/apiCalls/blogApi';
import { getUserBlogById } from '../redux/slice/blogSlice';
import { RootState } from '../redux/store';
function MyBlog() {
  const selectedBlog = useSelector((state: RootState) => state.blogSlice.userBlogByID)
  const [getUserSelectedBlog] = useGetUserSelectedBlogMutation()
  const dispatch = useDispatch()
  const { selectedBlogId } = useParams();
  const sendIdHandler = async() => {
    const response:any = await getUserSelectedBlog(selectedBlogId)
    dispatch(getUserBlogById(response.data))
}
  useEffect(() => {
    sendIdHandler()
  }, [selectedBlogId])
  return (
    <div>
      <div className='pt-4 border rounded my-5 p-3'>
      <img src={`http://localhost:8000/images/${selectedBlog.image}`} alt={`${selectedBlog.title}`} />
          <h2 className='text-4xl'>{selectedBlog && selectedBlog.title}</h2>
          <p className='text-[21px] pt-3'>{selectedBlog && selectedBlog.description}</p>
      </div>
    </div>
  )
}

export default MyBlog
