import React, { useState } from 'react'

function EditTodoForm({ editTodo, task }) {
    const [value, setValue] = useState(task.task);


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        editTodo(value, task.id);

        setValue('');

    }
    return (
        <form className="EditTodoForm" onSubmit={handleSubmit}>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="todo-input" placeholder='Update your task'>
            </input>
            <button type="submit" className='todo-btn'>Update Task</button>
        </form>
    )
}

export default EditTodoForm