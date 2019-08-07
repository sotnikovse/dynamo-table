<template>
  <div class="container py-6">
    <h1 class="text-2xl font-semibold mb-4">
      Simple Datatable
    </h1>
    <DataTable
      :headers="simpleHeaders"
      :items="simpleItems"
    >
      <template v-slot:item="{ item }">
        <td>
          <div
            contenteditable="true"
            @input="onInput"
            @blur="onChange(item)"
          >
            {{ item.id }}
          </div>
        </td>
        <td>
          <div
            contenteditable="true"
            @input="onInput"
            @blur="onChange(item)"
          >
            {{ item.col1 }}
          </div>
        </td>
        <td>
          <div
            contenteditable="true"
            @input="onInput"
            @blur="onChange(item)"
          >
            {{ item.col2 }}
          </div>
        </td>
        <td>
          <div
            contenteditable="true"
            @input="onInput"
            @blur="onChange(item)"
          >
            {{ item.col3 }}
          </div>
        </td>
      </template>
    </DataTable>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'

export default {
  name: 'Home',
  components: {
    DataTable
  },
  data () {
    return {
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
  methods: {
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
