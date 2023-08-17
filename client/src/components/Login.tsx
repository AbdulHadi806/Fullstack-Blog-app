import React, { useEffect, useState } from 'react'
import { LoginResponse, UserData, UserDetails } from '../interface/user';
import axios from 'axios'
import { useLoginUserMutation } from '../redux/apiCalls/blogApi';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedInUser } from '../redux/slice/blogSlice';
function Login() {
  const [loginUser] = useLoginUserMutation()
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [token, setToken] = useState()
  const [user, setUser] = useState<UserDetails | null>(null)
  const dispatch = useDispatch()
  const LoginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData: UserData = {
      email: email,
      password: password,
    };
    try {
      const response:any =  await loginUser(userData)
      if(response.data.token) {
        setToken(response.data.token)
        setUser(response.data.user)
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }
  useEffect(() => {
    if (token) {
      localStorage.setItem('access_token', token)
    }
    if(user){
      const jsonUser = JSON.stringify(user)
      localStorage.setItem('user_details', jsonUser)
    }
    const storedUser = localStorage.getItem('user_details')
    const parseUser = storedUser ?  JSON.parse(storedUser) : null
    dispatch(getLoggedInUser(parseUser))
  }, [token])
  return (
    <form onSubmit={e => { LoginHandler(e) }} className='max-w-[400px] mx-auto'>
      <div>
        <div className='flex flex-col gap-2'>
          <input type="text" placeholder='Name' value={email} onChange={e => { setEmail(e.target.value) }} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
          <input type="text" placeholder='Email' value={password} onChange={e => { setPassword(e.target.value) }} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
        </div>
        <button type='submit'>Login</button>
      </div>
    </form>
  )
}

export default Login
