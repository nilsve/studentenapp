import {
    makeApiRequest,
} from '../../apis/actions';

import {
    LOGIN,
} from '../constants';

export function login(username, password) {
    return makeApiRequest(LOGIN, {username, password})
}