import Vue from 'vue'
import Router from 'vue-router'
const router = require('./router')

Vue.use(Router)

export default new Router({
  routes: [
    router.auth,
    router.index,
    router.travel,
    router.user,
    router.enterprise
  ]
})
