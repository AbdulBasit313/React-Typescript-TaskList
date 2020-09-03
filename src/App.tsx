import React from 'react';

import Header from './components/Header';
import ProjectContextProvider from './context/ProjectContext';
import Sidebar from './components/Sidebar';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TaskListContextProvider from './context/TaskListContext';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Project from './components/Project';


const App = () => (
  <Router>
    <Switch>
      <Route exact path='/' component={ProjectApp} />
      <Route exact path='/:project_id' component={Project} />
    </Switch>
  </Router>
)

const ProjectApp = () => (
  <TaskListContextProvider>
    <ProjectContextProvider>
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
    </ProjectContextProvider>
  </TaskListContextProvider>
)

export default App;
