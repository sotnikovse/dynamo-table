<template>
  <div class="overflow-x-auto">
    <table :class="[{ 'w-full': fullWidth }]">
      <thead>
        <tr>
          <th
            v-html="header.title"
            v-for="header in headers"
            :key="header.prop"
            :class="[
              header.classes ? header.classes: '',
              header.align === 'right'
                ? 'text-right'
                : header.align === 'center' ? 'text-center': 'text-left'
            ]"
            :width="header.width || null"
            :colspan="header.colspan || null"
            class="font-light text-gray-600 leading-snug"
          >
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item, i) in items"
          :key="i"
        >
          <slot name="item" :item="item">
          </slot>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    fullWidth: {
      type: Boolean,
      default: true
    },
    headers: {
      type: Array,
      default: () => { return [] }
    },
    items: {
      type: Array,
      default: () => { return [] }
    }
  }
}
</script>
