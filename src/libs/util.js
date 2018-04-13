 function loggedIn(role) {
     return window.localStorage.getItem('role') === role ?  true : false
};

export default {
    loggedIn
}