import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { UserDetails } from '../interface/user';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedInUser } from '../redux/slice/blogSlice';
import { RootState } from '../redux/store';

function Header() {
    const navigation = ['MyBlogs', 'All Blogs']
    const userState: UserDetails  | null = useSelector((state: RootState) => state.blogSlice.user)
    const dispatch = useDispatch()
    const deleteUserHandler = async() => {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_details");
      dispatch(getLoggedInUser(null))
    }
  return (
    <div className='flex items-center justify-between py-5'>
      <Link to={"/"}>Blogger</Link>
      <nav>
        <ul className='flex gap-3'>
          {navigation.map(item => {
            return (
              <li><Link to={`/${item}`}>{item}</Link></li>
            )
          })}
        </ul>
      </nav>
      <div>
        {userState == null?"" : <button onClick={deleteUserHandler} className='mx-3'>Sign Out</button>}
        {userState != null?  <Link to={"Dashboard"} className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Dashboard</span>
          <span className="relative invisible">Dashboard</span>
        </Link > : <Link to={"SignUp"} className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
          <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </span>
          <span className="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Sign Up</span>
          <span className="relative invisible">Sign Up</span>
        </Link >}
      </div>
    </div>
  )
}

export default Header
