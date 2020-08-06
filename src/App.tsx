import React from 'react';

import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TaskListContextProvider from './context/TaskListContext';
import './App.css';


const App = () => (
  <TaskListContextProvider>
    <div className='center'>
      <TodoForm />
      <TodoList />
    </div>
  </TaskListContextProvider>
)

export default App;
