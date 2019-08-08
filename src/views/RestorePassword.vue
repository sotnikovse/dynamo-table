<template>
  <div class="w-full max-w-sm mx-auto py-10">
    <form
      ref="form"
      :class="{ 'was-validated': wasValidated }"
      class="bg-white sm:shadow-md rounded px-8 pt-6 pb-8 mb-4"
      novalidate
    >
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
          v-model="model.email"
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          required
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          :class="{ 'border-red-500': formErrors.email }"
          @input="checkField"
          @keyup.enter="onSubmit"
        >
        <p v-if="formErrors.email" class="text-red-500 text-xs italic">{{ formErrors.email }}</p>
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
import FormValidation from '@/mixins/FormValidation'

export default {
  name: 'RestorePassword',
  mixins: [FormValidation],
  data () {
    return {
      model: {
        email: '',
      }
    }
  },
  methods: {
    async onSubmit (e) {
      try {
        this.wasValidated = true
        const isValid = await this.validate()
        if (isValid) {
          e.preventDefault()
          // TODO
        } else {
          e.preventDefault()
          e.stopPropagation()
        }
      } catch (error) {
        throw new Error(error)
      }
    },
  }
}
</script>
