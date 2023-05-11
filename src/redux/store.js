import { configureStore } from "@reduxjs/toolkit";
import { tasksReducer, filteredByStatusReduser } from "./planner/reducer";

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filteredByStatus: filteredByStatusReduser
    }
});