<template>
  <div class="container py-6">
    <!-- <h1 class="text-2xl font-semibold mb-4">
      Simple Datatable
    </h1>
    <DataTable
      :headers="simpleHeaders"
      :items="simpleItems"
    >
      <template v-slot:item="{ item }">
        <td>
          <div
            :contenteditable="isLoggedIn"
            @input="onInput"
            @blur="onChange(item)"
          >
            {{ item.id }}
          </div>
        </td>
        <td>
          <div
            :contenteditable="isLoggedIn"
            @input="onInput"
            @blur="onChange(item)"
          >
            {{ item.col1 }}
          </div>
        </td>
        <td>
          <div
            :contenteditable="isLoggedIn"
            @input="onInput"
            @blur="onChange(item)"
          >
            {{ item.col2 }}
          </div>
        </td>
        <td>
          <div
            :contenteditable="isLoggedIn"
            @input="onInput"
            @blur="onChange(item)"
          >
            {{ item.col3 }}
          </div>
        </td>
      </template>
    </DataTable> -->

    <div v-if="isLoggedIn" class="todos pb-5">
      <div class="py-5">
        <amplify-connect
          :mutation="createTodoMutation"
          @done="onCreateFinished"
        >
          <template slot-scope="{ loading, mutate }">
            <input
              v-model="name"
              type="text"
              placeholder="Name"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            >
            <!-- <input
              v-model="description"
              type="textarea"
              placeholder="Description"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
            > -->
            <button
              :disabled="loading"
              type="button"
              class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              @click="mutate"
            >
              Create
            </button>
          </template>
        </amplify-connect>
        
      </div>
      <amplify-connect
        :query="listTodosQuery"
        :subscription="createTodoSubscription"
        :onSubscriptionMsg="onMessage"
      >
        <template slot-scope="{ loading, data, errors }">
          <div v-if="loading">Loading...</div>

          <div v-else-if="errors.length > 0">
            {{ data }}
          </div>

          <div v-else-if="data">
            <TodoList :items="data.listTodos.items" />
          </div>
        </template>
      </amplify-connect>
    </div>
    <div v-else>
      Log in!
    </div>
  </div>
</template>

<script>
import { ListTodosQuery } from '@/graphql/queries'
import { CreateTodoMutation } from '@/graphql/mutations'
import { OnCreateAndUpdateTodoSubscription } from '@/graphql/subscriptions'

export default {
  name: 'Home',
  data () {
    return {
      name: '',
      description: '',
      inputValue: '',
      simpleHeaders: [
        {
          title: 'Id',
          prop: 'id',
          width: '100px',
        },
        {
          title: 'Col 1',
          prop: 'col1',
          width: '50%',
        },
        {
          title: 'Col 2',
          prop: 'col2',
          width: '20%',
        },
        {
          title: 'Col 3',
          prop: 'col3',
          width: '20%',
        },
      ],
      simpleItems: [
        {
          id: 1,
          col1: 'Col 11',
          col2: 'Col 12',
          col3: 'Col 13',
        },
        {
          id: 2,
          col1: 'Col 21',
          col2: 'Col 22',
          col3: 'Col 23',
        },
        {
          id: 3,
          col1: 'Col 31',
          col2: 'Col 32',
          col3: 'Col 33',
        }
      ]
    }
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.loggedIn
    },
    listTodosQuery() {
      return this.$Amplify.graphqlOperation(ListTodosQuery)
    },
    createTodoSubscription() {
      return this.$Amplify.graphqlOperation(OnCreateAndUpdateTodoSubscription)
    },
    createTodoMutation() {
      return this.$Amplify.graphqlOperation(CreateTodoMutation,
        { name: this.name, description: this.description })
    },
  },
  methods: {
    onCreateFinished () {
      console.log('Todo created!')
      this.name = ''
      this.description = ''
    },
    onMessage (prevData, newData) {
      if (newData.onCreateTodo) {
        prevData.data.listTodos.items.push(newData.onCreateTodo)
      } else if (newData.onUpdateTodo) {
        // TODO не обновлять, если было обновлено текущим пользователем?
        const updatedTodo = newData.onUpdateTodo
        const index = prevData.data.listTodos.items
          .findIndex(el => el.id === updatedTodo.id)
        prevData.data.listTodos.items.splice(index, 1, updatedTodo)
      }
      return prevData.data
    },
    onInput (e) {
      this.inputValue = e.target.innerText
    },
    onChange (item) {
      console.log('item', item)
      this.inputValue = ''
    }
  }
}
</script>
