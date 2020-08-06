import React, { ChangeEvent, useState, FormEvent } from 'react';

interface TodoProps {
  todo: Todo
  toggleTodo: toggleTodo
  deleteTodo: deleteTodo
  saveEditing: saveEditing
}

const Todo: React.FC<TodoProps> = ({
  todo, toggleTodo, deleteTodo, saveEditing }) => {
  const [newTodo, setNewTodo] = useState(todo.text)
  const [isEdit, setIsEdit] = useState(false)
  const [isHover, setIsHover] = useState(false)

  const { id, text, completed } = todo

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (newTodo.trim()) {
      saveEditing(id, newTodo)
      setIsEdit(false)
    }
    else {
      alert('Todo can\'t be empty')
    }
  }

  const editTodo = () => {
    setIsEdit(true)
  }

  const cancelEditing = () => {
    setIsEdit(false)
    setNewTodo(todo.text)
  }

  const handleMouseEnter = () => {
    setIsHover(true)
  }

  const handleMouseLeave = () => {
    setIsHover(false)
  }

  return (
    <li>
      {isEdit ?
        <form>
          <input value={newTodo} onChange={handleChange} />
          <button type="button" onClick={cancelEditing}>cancel</button>
          <button onClick={handleSubmit}>save</button>
        </form>
        :
        <div
          style={{ display: 'flex', justifyContent: 'center' }}
          onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
        >
          <div>
            <label className={completed ? 'completed' : undefined}>
              <input
                type='checkbox'
                checked={completed}
                onChange={() => toggleTodo(todo)}
              />
              {text}
            </label>
          </div>
          {isHover && <div>
            <button onClick={editTodo}>Edit</button>
            <button onClick={() => deleteTodo(id)}>Delete</button>
          </div>
          }
        </div>
      }
    </li>
  )
}


export default Todo