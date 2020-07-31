type Todo = {
  id: number,
  text: string,
  completed: boolean
}

type toggleTodo = (selectedTodo: Todo) => void

type addNewTodo = (newTodo: Todo) => void