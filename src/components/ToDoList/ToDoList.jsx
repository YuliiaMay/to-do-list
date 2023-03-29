import React from "react";
import { ToDoItem, ToDoItems } from "./ToDoList.styled";
import Task from "components/Task";

const ToDoList = ({tasks, onDeleteTask, onToggleCompleted}) => (
    <ToDoItems>
        {
            tasks.map(({ id, text, completed }) => {
                return (
                    <ToDoItem key={id} complited={completed}>
                        <Task
                            text={text}
                            completed={completed}
                            toggleCompleted={() => onToggleCompleted(id)}
                            deleteTask={() => onDeleteTask(id)}
                        /> 

                    </ToDoItem>
                )
            })
        }
    </ToDoItems>
)

export default ToDoList