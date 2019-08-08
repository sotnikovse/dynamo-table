<template>
  <div class="container py-6">
    <div class="flex flex-col justify-center items-center">
      <h1 class="text-2xl font-semibold">404</h1>
      <p class="text-lg">Page not found.</p>
      <router-link
        :to="{ name: 'home' }"
        class="text-blue-500 hover:text-blue-800"
      >
        На главную
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
h1 {
  font-size: 92px;
}
</style>
