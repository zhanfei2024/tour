import Vue from 'vue'
import Vuex from 'vuex'
import Auth from './modules/auth'
import Lang from './modules/language'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Auth,
        Lang
    }
})