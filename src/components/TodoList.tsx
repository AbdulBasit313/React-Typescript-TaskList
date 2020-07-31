import React from 'react';

import Todo from './Todo';

interface TodoListProps {
  todos: Array<Todo>
  toggleTodo: toggleTodo
}


const TodoList: React.FC<TodoListProps> = ({ todos, toggleTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </ul>
  )
}


export default TodoList