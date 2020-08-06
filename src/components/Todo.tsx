import React, { ChangeEvent, useState, FormEvent } from 'react';

interface TodoProps {
  todo: Todo
  toggleTodo: toggleTodo
  deleteTodo: deleteTodo
  editTodo: editTodo
  cancelEditing: cancelEditing
  saveEditing: saveEditing
}

const Todo: React.FC<TodoProps> = ({
  todo, toggleTodo, deleteTodo, editTodo, cancelEditing, saveEditing }) => {
  const [newTodo, setNewTodo] = useState(todo.text)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (newTodo.trim()) {
      saveEditing(todo.id, newTodo)
    }
    else {
      alert('Todo can\'t be empty')
    }
  }

  return (
    <li>
      {todo.isEditing ?
        <form>
          <input value={newTodo} onChange={handleChange} />
          <button type="button" onClick={() => cancelEditing(todo)}>cancel</button>
          <button onClick={handleSubmit}>save</button>
        </form>
        :
        <div>
          <label className={todo.completed ? 'completed' : undefined}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => toggleTodo(todo)}
            />
            {todo.text}
          </label>
          <button onClick={() => editTodo(todo)}>Edit</button>
          <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        </div>
      }
    </li>
  )
}


export default Todo