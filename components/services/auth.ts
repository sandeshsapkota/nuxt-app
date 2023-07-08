import {AuthLoginParams} from "~/@types";

class Auth {
    login({username, callback}: AuthLoginParams) {
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
