import React, { useState, useEffect } from 'react'

export default function TodoForm(props) {
    const [input, setInput, todos, setTodos, editTodo, setEditTodo] = useState("");

    
    const updateTodo = (title, id, completed) => {
        const newTodo = todos.map((todo) =>
            todo.id === id ? {title, id, completed} : todo
        );
        setTodos(newTodo);
        setEditTodo("");
    };

    useEffect(() =>{
        if(editTodo){
            setInput(editTodo.title);
        } else {
            setInput("")
        }  
    }, [setInput, editTodo]);

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!editTodo) {
            props.addTodo(input)
            setTodos([...todos, {title: input, completed: false}]);
        setInput("")
        } else {
            updateTodo(input, editTodo.id, editTodo.completed)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input value={input} onChange={(e) => setInput(e.target.value)} className="todo-input" placeholder='I need to...' />
            <button type='submit' className='todo-button'>{editTodo ? "OK" : "+"}</button>            
        </form>
    )
}
