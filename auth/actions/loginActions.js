import {
    LOGIN,
} from '../constants/login';

export function login(username, password) {
    return {
        type: LOGIN,
        data: {
            username,
            password
        },
    }
}