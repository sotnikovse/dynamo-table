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
          Change password
        </div>
      </div>
      <div
        v-if="errorMessage"
        class="mb-6"
      >
        <Alert
          title="Error"
          :value="!!errorMessage"
          :message="errorMessage"
          @input="errorMessage = ''"
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="old-password">
          Old password *
        </label>
        <input
          v-model="model.oldPassword"
          id="old-password"
          type="password"
          name="oldPassword"
          placeholder="Old password"
          required
          minlength="8"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          :class="{ 'border-red-500': formErrors.oldPassword }"
          @input="checkField"
          @keyup.enter="onSubmit"
        >
        <p v-if="formErrors.oldPassword" class="text-red-500 text-xs italic">{{ formErrors.oldPassword }}</p>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="new-password">
          Old password *
        </label>
        <input
          v-model="model.newPassword"
          id="new-password"
          type="password"
          name="newPassword"
          placeholder="New password"
          required
          minlength="8"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          :class="{ 'border-red-500': formErrors.newPassword }"
          @input="checkField"
          @keyup.enter="onSubmit"
        >
        <p v-if="formErrors.newPassword" class="text-red-500 text-xs italic">{{ formErrors.newPassword }}</p>
      </div>
      <!-- TODO Add custom validator el.setCustomValidity(message) -->
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="confirm-password">
          Confirm password *
        </label>
        <input
          v-model="model.confirmPassword"
          id="confirm-password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          required
          minlength="8"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          :class="{ 'border-red-500': formErrors.confirmPassword }"
          @input="checkField"
          @keyup.enter="onSubmit"
        >
        <p v-if="formErrors.confirmPassword" class="text-red-500 text-xs italic">{{ formErrors.confirmPassword }}</p>
      </div>
      <div>
        <button
          :disabled="loading"
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
import { Auth } from 'aws-amplify'
import FormValidation from '@/mixins/FormValidation'

export default {
  name: 'ChangePassword',
  mixins: [FormValidation],
  data () {
    return {
      loading: false,
      errorMessage: '',
      model: {
        oldPassword: '',
        newPassword: '',
        confirmPassword: '',
      }
    }
  },
  methods: {
    async onSubmit (e) {
      try {
        this.loading = true
        this.wasValidated = true
        const isValid = await this.validate()
        if (isValid) {
          e.preventDefault()
          this.errorMessage = ''
          const user = await Auth.currentAuthenticatedUser()
          const response = await Auth.changePassword(
            user,
            this.model.oldPassword,
            this.model.newPassword
          )
          // eslint-disable-next-line
          console.log(response)
        } else {
          e.preventDefault()
          e.stopPropagation()
        }
      } catch (error) {
        this.errorMessage = error.message || error
        throw new Error(error)
      } finally {
        this.loading = false
      }
    },
  }
}
</script>
