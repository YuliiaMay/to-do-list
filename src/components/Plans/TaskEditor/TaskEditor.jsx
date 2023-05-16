import React from 'react';
import { Formik } from 'formik';
import { useAddTaskMutation } from 'redux/planner/tasksApi';

// const initialValues = {
//     title: '',
//     category: '',
//     performer: '',
//     deadline: '',
//     priority: '',
//     status: '',
//     note: ''
// }

const TaskEditor = () => {
    const {data, isFetching} = useAddTaskMutation();
    const handleSubmit = async (e) => {
        e.preventDefault();

        
    }
    return (
        <div>
            <h1>Create task</h1>
            <Formik>
                {/* initialValues={{title: ''}} */}
                <form autoComplete='off'>
                    <label>
                        <input type="text" name="title" placeholder="do shopping" autoFocus />
                    </label>
                    
                    <label>
                        Deadline
                        <input type="date" name="deadline"/>
                    </label>

                    <p>Choose a status</p>
                    <label>
                        <input type="radio" name="status" />

                    </label>
                    <label>
                        <input type="radio" name="status" />
                    </label>                    
                    <label>
                        <input type="radio" name="status" />
                    </label>

                    <label>
                        Set priority:
                        <input
                            type="range"
                            name="priority"

                            min="0"
                            max="100"
                            step="10"
                        />
                    </label>

                    <label>
                        Note
                        <textarea name="note" rows="5" placeholder="Describe the task here..."></textarea>
                    </label>

                    <button type="submit">Save</button>
                </form>

            </Formik>
        </div>
    )
};

export default TaskEditor;