// initial state
const state = {
    role: '',
    roleId: ''
}
getters
const getters = {
    auth: state => state.auth
}

// actions
const actions = {
    getAuth({commit}) {

    }
}

//  mutations
const mutations = {
    setAuth(state, payload) {
        state.role = payload.role;
        state.roleId = payload.roleId
    }
}

export default {
    state,
    getters,
    actions,
    mutations,
}