import axios from 'axios';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { useSignUpMutation } from '../redux/apiCalls/blogApi';

function SignUp() {
    const [name, setName] = useState<string>("")
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [aboutMe, setAboutMe] = useState<string>("")
    const [signUp] =  useSignUpMutation()
    const signUpHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const userData = {
            user: name,
            email: email,
            password: password,
            aboutme: aboutMe
        };
    
        try {
           await signUp(userData)
        } catch (error) {
            console.error("Error:", error);
        }
    };
    
    return (
        <form onSubmit={e => {signUpHandler(e)}} className='max-w-[400px] mx-auto'>
            <div>
                <div className='grid md:grid-cols-2 gap-2'>
                    <input type="text" placeholder='Name' value={name} onChange={e => {setName(e.target.value)}} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    <input type="text" placeholder='Email' value={email} onChange={e => {setEmail(e.target.value)}} className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div className='mt-3'>
                    <input type="text" placeholder='Password' value={password} onChange={e => {setPassword(e.target.value)}} className='bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    <textarea id="message" value={aboutMe} onChange={e => {setAboutMe(e.target.value)}} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="About Me" />
                </div>
                <button type='submit'>Sign Up</button>
            </div>
            <p>Already have an account? <Link to={"/login"} className='text-[#0900ff]'>Login</Link> </p>
        </form>
    )
}

export default SignUp
