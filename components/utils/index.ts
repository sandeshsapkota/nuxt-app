class Utils {
    getUser() {
        return localStorage.getItem('username');
    }

    isUser() {
        return localStorage.getItem('username') === "user";
    }

    isAdmin() {
        return localStorage.getItem('username') === "admin";
    }
}

export default new Utils();
