<template>
  <div>
    <TodoItem
      v-for="item in items"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    items: {
      type: Array,
      default: () => { return [] }
    },
  },
}
</script>
