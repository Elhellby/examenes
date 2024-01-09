import { Blog } from '@/types/blog'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const apiName: string = 'blogsApi'
const typeName: string = 'blogsApi'

export const blogsApi = createApi({
    reducerPath: apiName,
    tagTypes: [typeName],
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.NEXT_PUBLIC_URL_API
    }),
    endpoints: (builder) => ({
        getBlogs: builder.query<Blog[], { filter: string }>({
            query: (filter) => {
                return filter ? `api/blog?filter=${filter.filter}` : `api/blog`
            },
            transformResponse: (response: { data: any }) => {
                return response.data
            },
            providesTags:[typeName]
        }),
        saveBlogs: builder.mutation<Blog[], { data: Blog }>({
            query: (data) => {
                return ({
                    url: `api/blog/create`,
                    method: 'POST',
                    body: data.data
                })
            },
            invalidatesTags: [typeName]
        })
    })
})

export const {
    useGetBlogsQuery,
    useSaveBlogsMutation,
    useLazyGetBlogsQuery
} = blogsApi
