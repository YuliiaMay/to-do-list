import React from 'react';
import { Formik } from 'formik';

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
    console.log("work");
    return (
        <div>
            <h1>Create task</h1>
            <Formik>
                {/* initialValues={{title: ''}} */}
                <form autoComplete='on'>
                    <label>
                        <input type="text" name="title" placeholder="do shopping" autofocus />
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