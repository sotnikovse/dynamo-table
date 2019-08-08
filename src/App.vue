<template>
  <div id="app">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import { components, AmplifyEventBus } from 'aws-amplify-vue'
import { Auth, Analytics } from 'aws-amplify'

export default {
  name: 'App',
  components: {
    ...components
  },
  computed: {
    isLoggedIn () {
      return this.$store.getters.loggedIn
    },
  },
  watch: {
    isLoggedIn (val) {
      if (val) {
        Analytics.enable()
      } else {
        Analytics.disable()
      }
    }
  },
  created () {
    this.init()
  },
  mounted () {
    AmplifyEventBus.$on('authState', info => {
      console.log(`Here is the auth event that was just emitted by an Amplify component: ${info}`)
    });
  },
  methods: {
    async init () {
      try {
        // Analytics.startSession()
        // window.addEventListener('beforeunload', () => {
        //   Analytics.stopSession()
        // })
        const user = await Auth.currentAuthenticatedUser()
        this.$store.commit('setUser', user)
      } catch (error) {
        if (error === 'not authenticated') {
          console.log(error)
        } else {
          throw new Error(error)
        }
      }
    }
  }
}
</script>
