import React, { useState, createContext, FC, useContext, useEffect } from "react"

import axios from 'axios'

type Props = {
  children: React.ReactNode,
}

interface TaskContextProps {
  todos: Todo[],
  // toggleTodo: toggleTodo
  addNewTodo: addNewTodo
  deleteTodo: deleteTodo
  // saveEditing: saveEditing
}

// const initialTodos: Array<Todo> = [
//   { id: 1, text: 'go to gym', completed: false },
//   { id: 2, text: 'get first order on guru', completed: false },
//   { id: 3, text: 'finish pomodoro app', completed: true },
//   { id: 4, text: 'learn linux', completed: false },
// ]

export const TaskListContext = createContext<TaskContextProps>({
  todos: [],
  // toggleTodo: () => { },
  addNewTodo: () => { },
  deleteTodo: () => { },
  // saveEditing: () => { }
})

export const useTaskList = () => useContext(TaskListContext)

const TaskListContextProvider: FC<Props> = ({ children }) => {
  const [todos, setTodos] = useState([])
  const [newData, setNewData] = useState(false)

  useEffect(() => {
    console.log('api called')
    let baseUrl = '/api/v1'
    axios.get(`${baseUrl}/todos`).then((res) => {
      setTodos(res.data.todos)
      console.log('res', res.data.todos)
    })
  }, [newData])


  const deleteTodo: deleteTodo = (id) => {
    console.log('deleted', id)
    let baseUrl = '/api/v1'
    axios
      .delete(`${baseUrl}/todos/${id}`)
      .then(res => {
        console.log('Deleted Todo ID', id)
        // let del = todos.filter((todo) => todo.id !== id)
        // setTodos(del)
      })
      .catch(err => console.log('err', err))
  }

  const addNewTodo: addNewTodo = (newTodo) => {
    let baseUrl = '/api/v1'
    axios
      .post(`${baseUrl}/todos`, newTodo)
      .then(res => {
        setNewData(true)
        console.log(res);
        console.log(res.data);
      })
      .catch(err => console.log('err', err))
    // setTodos([newTodo, ...todos])
  }

  // const toggleTodo: toggleTodo = (selectedTodo) => {
  //   const newTodos = todos.map(todo => {
  //     if (todo === selectedTodo) {
  //       return {
  //         // @ts-ignore
  //         ...todo,
  //         completed: !todo.completed
  //       }
  //     }
  //     return todo
  //   })
  //   setTodos(newTodos)
  // }


  // const saveEditing: saveEditing = (id, updatedTodo) => {
  //   const updatedTodos = todos.map(todo => {
  //     if (todo.id === id) {
  //       return {
  //         ...todo,
  //         text: updatedTodo
  //       }
  //     }
  //     return todo
  //   })

  //   setTodos(updatedTodos)
  // }


  return (
    <TaskListContext.Provider value={{
      todos,
      // toggleTodo,
      deleteTodo,
      addNewTodo,
      // saveEditing
    }}>
      {children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider

// export const TaskListContext = createContext<TaskContextProps>({} as TaskContextProps)
// export const TaskListContext = createContext<TaskContextProps | undefined>(undefined)
// export const TaskListContext = createContext<Partial<TaskContextProps>>({})