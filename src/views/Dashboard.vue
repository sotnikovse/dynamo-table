<template>
  <div class="container py-6">
    <DataTable />
  </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'

export default {
  name: 'Dashboard',
  components: {
    DataTable
  }
}
</script>
