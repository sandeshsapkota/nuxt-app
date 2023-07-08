class Auth {
    login(username:string,  callback: () => void) {
        console.log(username)
        localStorage.setItem('login', 'true')
        localStorage.setItem('username', username)
        callback()
    }

    logout( callback?: () => void) {
        localStorage.setItem('login', 'false')
        localStorage.setItem('username', '')
    }
}

export default new Auth();
