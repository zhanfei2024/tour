import Vue from 'vue'
import Router from 'vue-router'
const route = require('./router')
const auth = require('../../libs/util')

Vue.use(Router)

const router = new Router({
  routes: [
    route.auth,
    route.index,
    route.travel,
    route.user,
    route.enterprise
  ]
});


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log(to)
    if (!auth.loggedIn(to.meta.role)) {
      next({
        path: `/${to.meta.role}-login`,
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export default router;
