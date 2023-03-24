import React from "react";
import { ToDoItem, DoneBtn, RemoveBtn, Task } from "./ToDoList.styled";


const ToDoList = ({tasks, onDeleteTask, onHaveDoneTask}) => (
    <ul>
        {
            tasks.map(({ id, text, completed }) => {
                return (
                    <ToDoItem key={id} complited={completed}>
                        <Task>{text}</Task>
                        <div>
                            <DoneBtn type="button" onClick={() => onHaveDoneTask(id)}>✔️</DoneBtn>
                            <RemoveBtn type="button" onClick={() => onDeleteTask(id)}>❌</RemoveBtn>
                        </div>
                    </ToDoItem>
                )
            })
        }
    </ul>
)

export default ToDoList