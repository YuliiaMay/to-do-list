import { createAction, nanoid } from "@reduxjs/toolkit";


export const addTask = createAction("planner/addTask", taskTitle => {
    return {
        payload: {
            taskTitle,
            id: nanoid(),
            completed: false,
        },
    }
});
export const deleteTask = createAction("planner/deleteTask");
export const toggleCompleted = createAction("planner/toggleCompleted");
export const setFiltereByStatus = createAction("planner/setFilteredByStatus");
