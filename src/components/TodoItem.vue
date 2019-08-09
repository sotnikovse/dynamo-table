<template>
  <input
    :value="item.name"
    class="block w-full"
    @input="onInput"
  >
</template>

<script>
import debounce from 'lodash.debounce'
import { API, graphqlOperation } from 'aws-amplify'
import { UpdateTodoMutation } from '@/graphql/mutations'

const DELAY = 1000

export default {
  name: 'TodoItem',
  props: {
    item: {
      type: Object,
      default: () => { return {} }
    },
  },
  methods: {
    onInput: debounce(function (e) {
      const val = e.target.value
      this.update(val)
    }, DELAY),
    async update (val) {
      const updatedTodo = await API.graphql(
        graphqlOperation(UpdateTodoMutation, { id: this.item.id, name: val })
      )
      // eslint-disable-next-line
      console.log(updatedTodo)
    },
    onUpdateFinished () {
      // eslint-disable-next-line
      console.log('Update finished!')
    },
  }
}
</script>
