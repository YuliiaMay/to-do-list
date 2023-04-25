import { combineReducers } from "redux";
import { statusTasks } from "../planner/constants";

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

export const tasksReducer = (state = tasksInitialState, action) => {
    switch (action.type) {
        case "planner/addTask":
            return [...state, action.payload];
        case "planner/deleteTask":
            return state.filter(task => task.id !== action.payload);
        case "planner/toggleCompleted":
            return state.map(task => {
                if (task.id !== action.payload) {
                    return task;
                }
                return { ...task, completed: !task.completed };
        });
        default:
        return state;
    }
};


const filteredByStatusInitialState = {
    status: filteredByStatus.toDo,
};

export const filteredByStatus = (state = filteredByStatusInitialState, action) => {
    switch (action.type) {
        case "planner/setFilteredByStatus":
            return {
                ...state,
                status: action.payload,
            };
    
        default:
            return state;
    }
}

// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
// export const rootReducer = (state = initialState, action) => {
//     return state;
// };