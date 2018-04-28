// initial state
const state = {
    type: '',
}
//getters
const getters = {
    language: state => state.type
}

// actions
const actions = {
    getAuth({ commit }) {

    }
}

//  mutations
const mutations = {
    setLang(state, payload) {
        state.type = payload.type
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}