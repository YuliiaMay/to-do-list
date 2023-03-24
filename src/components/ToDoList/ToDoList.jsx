import React from "react";
import { ToDoItem, ToDoItems, RemoveBtn, Task, Checkbox } from "./ToDoList.styled";


const ToDoList = ({tasks, onDeleteTask, onToggleCompleted}) => (
    <ToDoItems>
        {
            tasks.map(({ id, text, completed }) => {
                return (
                    <ToDoItem key={id} complited={completed}>
                        <Checkbox
                            type="checkbox"
                            checked={completed}
                            onChange={() => onToggleCompleted(id)}
                        />
                        <Task>{text}</Task>
                        <RemoveBtn type="button" onClick={() => onDeleteTask(id)}>❌</RemoveBtn>

                    </ToDoItem>
                )
            })
        }
    </ToDoItems>
)

export default ToDoList