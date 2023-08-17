import React, { useEffect, useState } from 'react'
import { UserDetails } from '../interface/user'
import {  useLoginUserMutation } from '../redux/apiCalls/blogApi'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

function UserDashBoard() {
    const userState = useSelector((state: RootState) => state.blogSlice.user)
  return (
    <div className='shadow-lg p-4'>
      <span className='block font-semibold'>Username: <span className='font-normal'>{userState && userState.user}</span></span>
      <span className='block font-semibold'>Email: <span className='font-normal'>{userState && userState.email}</span></span>
      <p className='font-semibold'>aboutme: <span className='font-normal'>{userState && userState.aboutme}</span></p>
      <span className='block font-semibold'>User Created At: <span className='font-normal'>{userState && userState.createdAt}</span></span>
    </div>
  )
}

export default UserDashBoard
