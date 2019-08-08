import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Dashboard from './views/Dashboard.vue'
import NotFound from './views/NotFound.vue'
import SignIn from './views/SignIn.vue'
import SignUp from './views/SignUp.vue'
import Welcome from './views/Welcome.vue'
import ConfirmEmail from './views/ConfirmEmail.vue'
import RestorePassword from './views/RestorePassword.vue'
import ChangePassword from './views/ChangePassword.vue'

import store from './store'

Vue.use(Router)

const router = new Router({
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
      meta: {
        requiresAuth: true,
      },
      component: Dashboard
    },
    {
      path: '/signin',
      name: 'signin',
      meta: {
        requiresNotAuth: true,
      },
      component: SignIn
    },
    {
      path: '/signup',
      name: 'signup',
      meta: {
        requiresNotAuth: true,
      },
      component: SignUp
    },
    {
      path: '/confirm-email',
      name: 'confirm-email',
      meta: {
        requiresNotAuth: true,
      },
      component: ConfirmEmail
    },
    {
      path: '/welcome',
      name: 'welcome',
      meta: {
        requiresNotAuth: true,
      },
      component: Welcome
    },
    {
      path: '/restore-password',
      name: 'restore-password',
      meta: {
        requiresNotAuth: true,
      },
      component: RestorePassword
    },
    {
      path: '/change-password',
      name: 'change-password',
      meta: {
        requiresAuth: true,
      },
      component: ChangePassword
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const loggedIn = store.getters.loggedIn
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresNotAuth = to.matched.some(record => record.meta.requiresNotAuth)
  if (requiresAuth) {
    // этот путь требует авторизации, проверяем залогинен ли
    // пользователь, и если нет, перенаправляем на страницу логина
    if (!loggedIn) {
      next({
        name: 'signin',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else if (requiresNotAuth) {
    if (loggedIn) {
      next({ name: 'home' })
    } else {
      next()
    }
  } else {
    next() // всегда так или иначе нужно вызвать next()!
  }
})

export default router
