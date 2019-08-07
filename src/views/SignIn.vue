<template>
  <div class="w-full max-w-sm mx-auto py-10">
    <form class="bg-white sm:shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="flex items-center justify-between mb-6">
        <div class="text-xl">
          Login
        </div>
        <div>
          <router-link
            :to="{ name: 'signup' }"
            class="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800"
          >
            Create account
          </router-link>
        </div>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Email *
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
        >
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password *
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          name="password"
          placeholder="******************"
        >
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          type="button"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="onSubmit"
        >
          Sign In
        </button>
        <router-link
          :to="{ name: 'restore-password' }"
          class="inline-block align-baseline text-sm text-blue-500 hover:text-blue-800"
        >
          Forgot Password?
        </router-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignIn',
  data () {
    return {
      model: {
        email: '',
        password: '',
      }
    }
  },
  methods: {
    onSubmit () {
      //
    },
  }
}
</script>
