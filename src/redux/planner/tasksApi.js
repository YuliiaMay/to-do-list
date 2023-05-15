import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const API_ENDPOINT = '/tasks';
const BASE_URL = 'https://64511b10a3221969115af51b.mockapi.io';


export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({ BASE_URL }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "tasks"
        })
    })
})