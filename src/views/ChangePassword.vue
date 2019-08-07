<template>
  <div class="w-full max-w-sm mx-auto py-10">
    <form class="bg-white sm:shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-6">
        <div class="text-xl">
          Change password
        </div>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="old-password">
          Old password
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="old-password"
          type="password"
          name="old-password"
          placeholder="******************"
        >
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="new-password">
          New password
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="new-password"
          type="password"
          name="new-password"
          placeholder="******************"
        >
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">
          Confirm password
        </label>
        <input
          class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          id="confirm-password"
          type="password"
          name="confirm-password"
          placeholder="******************"
        >
        <p class="text-red-500 text-xs italic">Please choose a password.</p>
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
  name: 'ChangePassword',
  data () {
    return {
      model: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
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
