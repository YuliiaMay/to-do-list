import { configureStore } from "@reduxjs/toolkit";
// import { tasksReducer, filteredByStatusReduser } from "./planner/reducer";
import { taskApi } from "./planner/tasksApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        // filter: filterSlice,
        // filteredByStatus: filteredByStatusReduser
        [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware: (getDefaultMiddleware) => [
        ...getDefaultMiddleware(),
        taskApi.middleware,
    ],
});

setupListeners(store.dispatch);