import { nanoid } from "nanoid";

export const addTask = taskTitle => {
    return {
        type: "planner/addTask",
        payload: {
            id: nanoid(),
            completed: false,
            taskTitle,
        },
    };
};

export const deleteTask = taskId => {
    return {
        type: "planner/deleteTask",
        payload: taskId,
    };
};

export const toggleCompleted = taskId => {
    return {
        type: "planner/toggleCompleted",
        payload: taskId,
    };
};

export const setStatusFilter = value => {
    return {
        type: "planner/setStatusTasks",
        payload: value,
    };
};