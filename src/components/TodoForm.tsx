import React, { useState, ChangeEvent, FormEvent } from 'react';

import { useTaskList } from '../context/TaskListContext';


const TodoForm = () => {
  const [newTodo, setNewTodo] = useState('')
  const { addNewTodo } = useTaskList()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const addTodo = { id: Math.random(), text: newTodo, completed: false }
    if (newTodo.trim()) {
      addNewTodo(addTodo)
    }
    else {
      alert('Todo can\'t be empty')
    }
    setNewTodo('')
  }

  return (
    <form>
      <input placeholder='your todo...' value={newTodo} onChange={handleChange} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  )
}


export default TodoForm