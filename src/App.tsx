import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TaskListContextProvider from './context/TaskListContext';
import './App.css';


const App = () => (
  <TaskListContextProvider>
    <TodoForm />
    <TodoList />
  </TaskListContextProvider>
)

export default App;
