import {
    CONNECT_APIS,
} from '../constants/connection';

export function connect(code) {
    return {
        type: CONNECT_APIS,
    }
}