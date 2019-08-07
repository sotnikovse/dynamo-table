<template>
  <div class="w-full max-w-sm mx-auto py-10">
    <form class="bg-white sm:shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-6">
        <div class="text-xl">
          Restore password
        </div>
      </div>
      <div class="mb-4">
        Please enter the email address associated with your account and we'll email you a password reset link.
      </div>
      <div class="mb-6">
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
      <div>
        <button
          type="button"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          @click="onSubmit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'RestorePassword',
  data () {
    return {
      model: {
        email: '',
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
