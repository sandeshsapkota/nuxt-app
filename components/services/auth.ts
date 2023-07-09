class Auth {
    login(username:string,  callback: () => void) {
        localStorage.setItem('login', 'true')
        localStorage.setItem('username', username)
        callback()
    }

    logout( callback?: () => void) {
        localStorage.setItem('login', 'false')
        localStorage.setItem('username', '')
        if(callback) {
            callback();
        }
    }
}

export default new Auth();
