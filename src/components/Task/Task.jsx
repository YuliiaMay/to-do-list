import React from "react";
import { CgCloseO } from "react-icons/cg";
import { Checkbox, TextTask, RemoveBtn } from "./Task.styled";

const Task = ({text, completed, toggleCompleted, deleteTask }) => (
        <>
            <Checkbox
                type="checkbox"
                checked={completed}
                onChange={toggleCompleted}
            />
            <TextTask>{text}</TextTask>
            <RemoveBtn type="button" onClick={deleteTask}><CgCloseO /></RemoveBtn>
        </>
)

export default Task;
