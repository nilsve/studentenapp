import {
    API_REQUEST,
} from '../constants';

export function makeApiRequest(apiName, parameters) {
    return {
        type: API_REQUEST,
        apiName,
        parameters,
    };
}