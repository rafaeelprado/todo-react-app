import React from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { BiCheckCircle, BiEdit } from 'react-icons/bi'

export default function TodoItem(props) {
  const { todo, removeTodo, completeTodo, editTodo } = props
  
  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row" }>
        {todo.text}
        <div className="iconsContainer">
        <RiCloseCircleLine style={{ marginRight: 5 }} onClick={() => removeTodo(todo.id)} />
        <BiEdit style={{ marginRight: 5 }} onClick={() => editTodo(todo.id)} />
        <BiCheckCircle onClick={() => completeTodo(todo.id)} />
        </div>
    </div>
  )
}
