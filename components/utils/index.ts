class Utils {
    getUser() {
        return localStorage.getItem('username');
    }
}

export default new Utils();
