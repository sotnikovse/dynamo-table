export const CreateTodoMutation = `
  mutation CreateTodo($name: String!, $description: String) {
    createTodo(input: { name: $name, description: $description }) {
      id
      name
    }
  }
`

export const UpdateTodoMutation = `
  mutation UpdateTodo($id: ID!, $name: String!) {
    updateTodo(input: { id: $id, name: $name }) {
      id
      name
    }
  }
`
