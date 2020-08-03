import React from 'react';

import Todo from './Todo';
import { useTaskList } from '../context/TaskListContext';


const TodoList = () => {
  const { todos, toggleTodo, deleteTodo } = useTaskList()

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  )
}


export default TodoList