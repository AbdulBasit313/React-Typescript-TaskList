import React, { useState, createContext, FC, useContext } from "react"

type Props = {
  children: React.ReactNode,
}

interface TaskContextProps {
  todos: Todo[],
  toggleTodo: toggleTodo,
  addNewTodo: addNewTodo,
  deleteTodo: deleteTodo
}

const initialTodos: Array<Todo> = [
  { id: 1, text: 'go to gym', completed: false },
  { id: 2, text: 'get first order on fiverr', completed: false },
  { id: 3, text: 'finish pomodoro app', completed: true },
  { id: 4, text: 'learn linux', completed: false },
]

export const TaskListContext = createContext<TaskContextProps>({
  todos: [],
  toggleTodo: () => { },
  addNewTodo: () => { },
  deleteTodo: () => { }
})
// export const TaskListContext = createContext<TaskContextProps>({} as TaskContextProps)
// export const TaskListContext = createContext<TaskContextProps | undefined>(undefined)
// export const TaskListContext = createContext<Partial<TaskContextProps>>({})

export const useTaskList = () => useContext(TaskListContext)

const TaskListContextProvider: FC<Props> = ({ children }) => {
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

  const deleteTodo: deleteTodo = (id) => {
    let del = todos.filter((todo) => todo.id !== id)
    setTodos(del)
  }

  const addNewTodo: addNewTodo = (newTodo) => {
    setTodos([newTodo, ...todos])
  }

  return (
    <TaskListContext.Provider value={{
      todos,
      toggleTodo,
      deleteTodo,
      addNewTodo
    }}>
      {children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider