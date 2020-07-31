import React, { useState } from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';


const initialTodos: Array<Todo> = [
  { id: 1, text: 'go to gym', completed: false },
  { id: 2, text: 'get first order on fiverr', completed: false },
  { id: 3, text: 'finish pomodoro app', completed: true },
  { id: 4, text: 'learn linux', completed: false },
]


const App = () => {
  const [todos, setTodos] = useState(initialTodos)

  const toggleTodo: toggleTodo = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const addNewTodo: addNewTodo = (newTodo) => {
    setTodos([newTodo, ...todos])
  }

  return (
    <>
      <TodoForm addNewTodo={addNewTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
      />
    </>
  );
}

export default App;
