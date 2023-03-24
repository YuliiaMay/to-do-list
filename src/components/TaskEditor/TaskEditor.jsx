import React from "react";

const TaskEditor = ({onHandelChange, onHandelSubmit}) => (
    <form onSubmit={onHandelSubmit}>
        <input
            type="text"
            name='text'
            onChange={onHandelChange}

        />
        <button type="submit">Create</button>
    </form>
);

export default TaskEditor;