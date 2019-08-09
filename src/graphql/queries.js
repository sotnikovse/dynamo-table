export const ListTodosQuery = `
  query ListTodos {
    listTodos {
      items {
        id
        name
      }
    }
  }
`
