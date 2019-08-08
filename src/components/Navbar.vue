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
      <template v-if="isLoggedIn">
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
      <div v-else>
        <router-link
          :to="{ name: 'signin' }"
          class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-500 hover:bg-white"
        >
          Log in
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'Navbar',
  computed: {
    isLoggedIn () {
      return this.$store.getters.loggedIn
    },
  },
  methods: {
    async onSignOut () {
      await Auth.signOut()
      this.$store.commit('setUser')
      this.$router.replace({ name: 'signin' })
    }
  }
}
</script>
