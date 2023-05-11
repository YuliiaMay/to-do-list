import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { statusTasks } from "../planner/constants";
import { addTask, deleteTask, toggleCompleted, setFiltereByStatus } from "./actions";
// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.
// const initialState = {
//     tasks: [
//         { id: 0, text: "Learn HTML and CSS", completed: true },
//         { id: 1, text: "Get good at JavaScript", completed: true },
//         { id: 2, text: "Master React", completed: false },
//         { id: 3, text: "Discover Redux", completed: false },
//         { id: 4, text: "Build amazing apps", completed: false },
//     ],
//     filters: {
//         status: statusTasks.toDo,
//     },
//     isAddTaskModalOpen: false,
// };


const tasksInitialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
];

export const tasksReducer = createReducer(tasksInitialState, {
    [addTask]: (state, action) => {
        // ✅ Immer замінить це на операцію оновлення
        state.push(action.payload);
    },
    [deleteTask]: (state, action) => {
        // ✅ Immer замінить це на операцію оновлення
        const index = state.findIndex(task => task.id === action.payload);
        state.splice(index, 1);
    },
    [toggleCompleted]: (state, action) => {
        // ✅ Immer замінить це на операцію оновлення
        for (const task of state) {
            if (task.id === action.payload) {
                task.completed = !task.completed;
            }
        }
    },
});


const filteredByStatusInitialState = {
    status: statusTasks.toDo,
};

export const filteredByStatusReduser = createReducer(filteredByStatusInitialState, {
    [setFiltereByStatus]: (state, action) => {
        state.status = action.payload;
    }
})
