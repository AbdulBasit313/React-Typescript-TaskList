// TODOS
type Todo = {
  id: number,
  text: string,
  completed: boolean,
}

type addNewTodo = (newTodo: Todo) => void

type deleteTodo = (id: number) => void

type toggleTodo = (selectedTodo: Todo) => void

type saveEditing = (id: number, updatedTodo: string) => void


// PROJECTS
type Project = {
  id: number,
  name: string,
}

type addNewProject = (newProject: Project) => void