import Socket from '../Socket';
import config from '../../settings.json';

import {
    CONNECT_APIS,
    CONNECTED_APIS,
    API_REQUEST,
} from '../constants';

let socket = null;

async function connect(dispatch) {
    if (!socket) {
        socket = new Socket();

        // TIJDELIJK
        dispatch({
            type: CONNECTED_APIS,
        })
        // await socket.connectWebSocket(config.api.domain);
    }
}

async function handleApiRequest(dispatch, apiName, parameters) {
    console.log('API name: ', apiName);
    console.log('Parameters: ', parameters);

    //TODO: dit weghalen! dit is puur voor test
    if (apiName === 'LOGIN') {
        dispatch({
            type: 'LOGIN_SUCCESS',
        });
    }
}

export default store => next => action => {
    next(action);
    
    switch (action.type) {
        case CONNECT_APIS:
            connect(store.dispatch);
            break;
        case API_REQUEST:
            if (store.getState().apis.connection.connected) {
                handleApiRequest(store.dispatch, action.apiName, action.parameters);
            } else {
                console.warn('Trashed api request: ', apiName);
            }
            break;
    }
}