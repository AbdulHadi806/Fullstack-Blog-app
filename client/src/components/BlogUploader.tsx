import React, { useEffect, useState } from 'react'
import { Token } from '../customHooks/token'
import axios from "axios"
import { IBlogs } from '../interface/Iblogs'
import { useBlogUploaderMutation, useFetchBlogsByUserQuery } from '../redux/apiCalls/blogApi'

const BlogUploader = () => {
    const [title, setTitle] = useState<string>("")
    const [keyword, setKeyword] = useState<string>("")
    const [blog, setBlog] = useState<string>("")
    const [blogUploader] = useBlogUploaderMutation()
    const {data, refetch} = useFetchBlogsByUserQuery(0)
    const [selectedFile, setSelectedFile] = useState<any>(null);
    
    const submitForm = async(e: React.FormEvent<HTMLFormElement>) => {
        try {
            e.preventDefault()
            let blogData = new FormData();
            blogData.append('title', title);
            blogData.append('category', keyword);
            blogData.append('blog', blog);
            blogData.append('image', selectedFile);

        await blogUploader(blogData)
        await refetch()
        } catch(err) {
            console.log(err ,"failed to upload blog")
        }
    }
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0]; 
        if (selectedFile) {
          setSelectedFile(selectedFile);
        }
      };
    return (
        <form onSubmit={e => {submitForm(e)}} className='max-w-[400px] mx-auto'>
            <div>
                <div className='grid md:grid-cols-2 gap-2'>
                    <input type="text" value={title} onChange={e => {setTitle(e.target.value)}} placeholder='Title' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                    <input type="text" value={keyword} onChange={e => {setKeyword(e.target.value)}} placeholder='Keyword Only One' className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
                </div>
                <div className='mt-3'>
                    <textarea id="message" onChange={e => {setBlog(e.target.value)}} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Copy Paste Your Blog Here..." />
                </div>
                <div className="flex items-center mt-3 justify-center w-full">
                    <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                            </svg>
                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                        </div>
                        <input id="dropzone-file" type="file" name="image" accept=".png, .jpg, .jpeg" onChange={handleFileChange} className="hidden" />
                    </label>
                </div>
                <button type='submit'>Submit Blog</button>
            </div>
        </form>
    )
}

export default BlogUploader
