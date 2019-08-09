export const OnCreateTodoSubscription = `
  subscription OnCreateTodo {
    onCreateTodo {
      id
      name
    }
  }
`

export const OnUpdateTodoSubscription = `
  subscription UpdateTodo {
    onUpdateTodo {
      id
      name
    }
  }
`

export const OnCreateAndUpdateTodoSubscription = `
  subscription CreatAndUpdateTodo {
    onCreateTodo {
      id
      name
    },
    onUpdateTodo {
      id
      name
    }
  }
`
