import React from 'react';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TaskListContextProvider from './context/TaskListContext';
import './App.css';


const App = () => (
  <TaskListContextProvider>
    <Header />
    <div style={{ display: 'flex' }}>
      <div>
        <Sidebar />
      </div>
      <div className='main'>
        <TodoForm />
        <TodoList />
      </div>
    </div>
  </TaskListContextProvider>
)

export default App;
