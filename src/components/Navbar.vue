<template>
  <nav class="flex items-center justify-between flex-wrap bg-purple-500 px-4 py-6 md:py-4">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <router-link
        :to="{ name: 'home' }"
        class="font-semibold text-xl tracking-tight"
      >
        Dynamo Table
      </router-link>
    </div>
    <div class="flex-grow flex items-center justify-end">
      <div v-if="isGuest">
        <router-link
          :to="{ name: 'signin' }"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-500 hover:bg-white"
        >
          Log in
        </router-link>
      </div>
      <template v-else>
        <div class="hidden sm:block text-gray-300">
          Username
        </div>
        <button
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-500 hover:bg-white ml-3"
          @click="onSignOut"
        >
          Sign out
        </button>
      </template>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  computed: {
    isGuest () {
      return true
    },
  },
  methods: {
    onSignOut () {
      //
      this.$router.replace({ name: 'home' })
    }
  }
}
</script>
