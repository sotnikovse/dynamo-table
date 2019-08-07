import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import Welcome from './views/Welcome.vue'
import RestorePassword from './views/RestorePassword.vue'
import ChangePassword from './views/ChangePassword.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/signin',
      name: 'signin',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/restore-password',
      name: 'restore-password',
      component: RestorePassword
    },
    {
      path: '/change-password',
      name: 'change-password',
      component: ChangePassword
    }
  ]
})
