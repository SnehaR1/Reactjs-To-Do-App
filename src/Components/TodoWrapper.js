import React, { useState, useEffect } from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm'
uuidv4();

function TodoWrapper() {
    const [todos, setTodos] = useState([])
    const [day, setDay] = useState('')

    useEffect(() => {
        const updateDay = () => {
            const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
            const date = new Date();
            const dateindex = date.getDay();
            setDay(days[dateindex]);

        }

        updateDay();
        const intervalid = setInterval(updateDay, 1000);
        return () =>
            clearInterval(intervalid)

    }, []
    );



    const addTodo = (todo) => {
        setTodos([
            ...todos,
            { id: uuidv4(), task: todo, completed: false, isEditing: false },
        ]);
        console.log(todos)
    }
    const toggleComplete = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))

    }
    const deleteTodo = (id) => {

        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));

    }
    const editTask = (task, id) => {
        setTodos(todos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo));

    }
    return (
        <div className='TodoWrapper'>
            <h1>To-Do List</h1>
            <h2>Wohooo...It's {day}🌝 ☕</h2>
            <TodoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                todo.isEditing ? (<EditTodoForm task={todo} key={index} editTodo={editTask} />) :
                    (< Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} />)
            ))}

        </div>

    )
}

export default TodoWrapper