import React, { useState } from 'react'

function TodoForm({ addTodo }) {
    const [value, setValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(value);
        if (value) {
            addTodo(value);

            setValue('');
        }
        else {
            alert("Please enter a task")
        }

    }
    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="todo-input" placeholder='Type in your task'>
            </input>
            <button type="submit" className='todo-btn'>Add Task</button>
        </form>
    )
}

export default TodoForm