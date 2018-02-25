import {
    CONNECT_APIS,
} from '../constants';

export function connect(code) {
    return {
        type: CONNECT_APIS,
    }
}