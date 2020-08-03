import React from 'react';


interface TodoProps {
  todo: Todo
  toggleTodo: toggleTodo
  deleteTodo: deleteTodo
}

const Todo: React.FC<TodoProps> = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <li>
      <label className={todo.completed ? 'completed' : undefined}>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => toggleTodo(todo)}
        />
        {todo.text}
      </label>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}


export default Todo