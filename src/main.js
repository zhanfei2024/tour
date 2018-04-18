// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from'iview'
import VueI18n from 'vue-i18n'
import 'iview/dist/styles/iview.css'
import './assets/css/full-layout.css'
import VueEditorMarkdown from 'vue-editor-markdown'
import {cn}  from './local/cn'
import {en} from './local/en'
import { tw } from './local/tw'




Vue.config.productionTip = false
Vue.use(VueI18n)
Vue.use(iView)
Vue.use(VueEditorMarkdown)

console.log(store.state.Lang.type)

const i18n = new VueI18n({
  locale: 'CN',
  messages: {
    'CN': cn,
    'EN': en,
    'TW': tw
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  components: { App },
  template: '<App/>'
})
