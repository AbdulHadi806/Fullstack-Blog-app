import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import BlogUploader from './components/BlogUploader';
import SignUp from './components/SignUp';
import {  Routes, Route } from "react-router-dom";
import Login from './components/Login';
import MyBlogs from './components/MyBlogs';
import { Token } from './customHooks/token';
import axios from 'axios'
import { IMyBlogType } from './interface/Iblogs';
import MyBlog from './components/Myblog';
import UserDashBoard from './components/UserDashBoard';
import { useLoginUserMutation } from './redux/apiCalls/blogApi';
import { UserData, UserDetails } from './interface/user';
import { useDispatch } from 'react-redux';
import { getLoggedInUser } from './redux/slice/blogSlice';
import AllPublicBlogs from './components/AllPublicBlogs';
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const storedUser = localStorage.getItem('user_details')
    const parseUser =  storedUser ? JSON.parse(storedUser) : null
    dispatch(getLoggedInUser(parseUser))
  }, [])
  return (
    <div className="App">
      <div className="container pb-5 mx-auto">
        <Header/>
        <Routes>
            <Route path="/" element={<BlogUploader />}></Route>
            <Route path="/SignUp" element={<SignUp />}></Route>
            <Route path='/login' element={<Login />}/>
            <Route path='/MyBlogs' element={<MyBlogs/>}/>
            <Route path='/MyBlogs/:selectedBlogId' element={<MyBlog />}/>
            <Route path='/Dashboard' element={<UserDashBoard />}/>
            <Route path="/All Blogs" element={<AllPublicBlogs />}/>
          </Routes>
      </div>
    </div>
  );
}

export default App;
