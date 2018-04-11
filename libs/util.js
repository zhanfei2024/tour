 function loggedIn(role) {
     return this.$store.state.Auth.role === role ?  true : false
};

module.exports = {
    loggedIn
}