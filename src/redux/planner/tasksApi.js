import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const API_ENDPOINT = '/tasks';
const BASE_URL = 'https://64511b10a3221969115af51b.mockapi.io/';


export const taskApi = createApi({
    reducerPath: "taskApi",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    tagTypes: ['Tasks'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => API_ENDPOINT
        }),
        addTask: builder.mutation({
            query: newTask => ({
                url: `/tasks`,
                method: 'POST',
                newTask,
            }),
        }),
        deleteTask: builder.mutation({
            query: taskId => ({
                url: `/tasks/${taskId}`,
                method: 'DELETE',           
            }),
            invalidatesTags: ['Tasks'],
        })
    })
});

export const { useGetTasksQuery, useAddTaskMutation, useDeleteTaskMutation } = taskApi;
