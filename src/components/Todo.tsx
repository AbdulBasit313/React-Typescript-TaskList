import React from 'react';


interface TodoProps {
  todo: Todo
  toggleTodo: toggleTodo
}

const Todo: React.FC<TodoProps> = ({ todo, toggleTodo }) => {
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
    </li>
  )
}


export default Todo