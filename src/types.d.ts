type Todo = {
  id: number,
  text: string,
  completed: boolean,
  isEditing: boolean
}

type addNewTodo = (newTodo: Todo) => void

type deleteTodo = (id: number) => void

type toggleTodo = (selectedTodo: Todo) => void

type editTodo = (selectedTodo: Todo) => void

type saveEditing = (id: number, updatedTodo: string) => void

type cancelEditing = (selectedTodo: Todo) => void


