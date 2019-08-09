<template>
  <div class="w-full max-w-sm mx-auto py-10">
    <form
      ref="form"
      :class="{ 'was-validated': wasValidated }"
      class="bg-white sm:shadow-md rounded px-8 pt-6 pb-8 mb-4"
      novalidate
    >
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
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password *
        </label>
        <input
          v-model="model.password"
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          required
          minlength="8"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
          :class="{ 'border-red-500': formErrors.password }"
          @input="checkField"
          @keyup.enter="onSubmit"
        >
        <p v-if="formErrors.password" class="text-red-500 text-xs italic">{{ formErrors.password }}</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          :disabled="loading"
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
import { Auth } from 'aws-amplify'
import FormValidation from '@/mixins/FormValidation'

export default {
  name: 'SignIn',
  mixins: [FormValidation],
  data () {
    return {
      loading: false,
      errorMessage: '',
      model: {
        email: '',
        password: '',
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
          const user = await Auth.signIn(this.model.email, this.model.password)
          // eslint-disable-next-line
          console.log(user)
          this.$store.commit('setUser', user)
          this.$router.push({ name: 'home' })
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
