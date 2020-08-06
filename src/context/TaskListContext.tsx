import React, { useState, createContext, FC, useContext } from "react"

type Props = {
  children: React.ReactNode,
}

interface TaskContextProps {
  todos: Todo[],
  toggleTodo: toggleTodo
  addNewTodo: addNewTodo
  deleteTodo: deleteTodo
  editTodo: editTodo
  cancelEditing: cancelEditing
  saveEditing: saveEditing
}

const initialTodos: Array<Todo> = [
  { id: 1, text: 'go to gym', completed: false, isEditing: false },
  { id: 2, text: 'get first order on guru', completed: false, isEditing: false },
  { id: 3, text: 'finish pomodoro app', completed: true, isEditing: false },
  { id: 4, text: 'learn linux', completed: false, isEditing: false },
]

export const TaskListContext = createContext<TaskContextProps>({
  todos: [],
  toggleTodo: () => { },
  addNewTodo: () => { },
  deleteTodo: () => { },
  editTodo: () => { },
  cancelEditing: () => { },
  saveEditing: () => { }
})

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

  const addNewTodo: addNewTodo = (newTodo) => {
    setTodos([newTodo, ...todos])
  }

  const deleteTodo: deleteTodo = (id) => {
    let del = todos.filter((todo) => todo.id !== id)
    setTodos(del)
  }

  const editTodo: editTodo = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          isEditing: !todo.isEditing
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const saveEditing: saveEditing = (id, updatedTodo) => {
    const updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          text: updatedTodo,
          isEditing: false
        }
      }
      return todo
    })

    setTodos(updatedTodos)
  }

  const cancelEditing: cancelEditing = (selectedTodo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          isEditing: !todo.isEditing
        }
      }
      return todo
    })
    setTodos(newTodos)
  }


  return (
    <TaskListContext.Provider value={{
      todos,
      toggleTodo,
      deleteTodo,
      addNewTodo,
      editTodo,
      cancelEditing,
      saveEditing
    }}>
      {children}
    </TaskListContext.Provider>
  )
}

export default TaskListContextProvider

// export const TaskListContext = createContext<TaskContextProps>({} as TaskContextProps)
// export const TaskListContext = createContext<TaskContextProps | undefined>(undefined)
// export const TaskListContext = createContext<Partial<TaskContextProps>>({})