import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer, filteredByStatusReduser } from "./planner/reducer";


// import { statusTasks } from "./planner/constants";
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


export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filteredByStatus: filteredByStatusReduser
    }
});