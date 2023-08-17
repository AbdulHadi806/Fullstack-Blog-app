import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Token } from '../../customHooks/token';

export const blogApiSlice = createApi({
    reducerPath: 'blogApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/',
        prepareHeaders: (headers, { getState }) => {
            const token = Token();
            if (token) {
                headers.set('authorization', `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["Blog", "User"],
    endpoints: (builder) => ({
        fetchBlogsByUser: builder.query({
            query: () => "blogs/blog",
            providesTags: ['Blog']
        }),
        fetchAllBlogs: builder.query({
            query: () => "public/blogs",
            providesTags: ['Blog']
        }),
        blogUploader: builder.mutation({
            query: (blogData) => ({
                url: 'blogs/blog',
                method: 'POST',
                body: blogData,
             
            }),

            invalidatesTags: ['Blog']
        }),
        getUserSelectedBlog: builder.mutation({
            query: (id) => ({
                url: `public/blogs/${id}`,
                method: 'GET',
            }),

            invalidatesTags: ['Blog']
        }),
        signUp: builder.mutation({
            query: ({ user, email, password, aboutme }) => ({
                url: 'registration/signUp',
                method: 'POST',
                body: {
                    user,
                    email,
                    password,
                    aboutme
                },
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }),
            invalidatesTags: ['Blog']
        }),
        loginUser: builder.mutation({
            query: ({ email, password }) => ({
                url: 'registration/login',
                method: 'POST',
                body: {
                    email,
                    password
                },
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            }),
            invalidatesTags: ['Blog']
        }),
    }),
})
export const { useSignUpMutation, useLoginUserMutation, useBlogUploaderMutation, useFetchBlogsByUserQuery, useGetUserSelectedBlogMutation, useFetchAllBlogsQuery  } = blogApiSlice