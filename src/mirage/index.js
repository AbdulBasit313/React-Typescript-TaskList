import { createServer } from "miragejs"


export default function () {
  let initialTodos = [
    { id: 1, text: 'go to institute', completed: false },
    { id: 2, text: 'get first order on guru', completed: false },
    { id: 3, text: 'finish pomodoro app', completed: true },
    { id: 4, text: 'learn linux', completed: false },
  ]

  createServer({
    routes() {
      this.namespace = '/api/v1'
      this.get("/todos", () => ({ todos: initialTodos }))
      this.delete("/todos/:id", (schema, req) => ({
        // todos: todos.pop()
        todos: initialTodos.filter(item => item.id !== req.params.id)
      }))
      this.post('/todos', (schema, req) => ({
        // todos: initialTodos.push(JSON.parse(req.requestBody))
        todos: [...initialTodos, JSON.parse(req.requestBody)]
      }))
    }
  })
}

// todos: initialTodos.filter((todo) => todo.id !== req.params.id)
// console.log('schema ==>', schema, 'req ==>', req)