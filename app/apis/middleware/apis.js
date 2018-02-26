import Socket from '../Socket';
import config from '../../settings.json';

import {
    CONNECT_APIS,
    CONNECTED_APIS,
    DISCONNECTED_APIS,
    API_REQUEST,
} from '../constants';

let socket = null;

async function connect(dispatch) {
    socket = new Socket();

    socket.connectWebSocket(config.api.domain, () => {
        // Connected
        dispatch({
            type: CONNECTED_APIS,
        });
    }, (error) => {
        // Disconnected
        dispatch({
            type: DISCONNECTED_APIS,
        });
    }, (message) => {
        // Bericht ontvangen
        dispatch({
            ...message,// Er wordt verwacht dat er een soort redux bericht terug wordt gestuurd vanuit de server
        })
    });
}

async function handleApiRequest(dispatch, apiName, parameters) {
    console.log('API name: ', apiName);
    console.log('Parameters: ', parameters);

    socket.sendMessage({
        apiName,
        parameters,
    });
}

export default store => next => action => {
    next(action);

    const connectionStatus = store.getState().apis.connection;

    switch (action.type) {
        case CONNECT_APIS:
            if (!connectionStatus.connected && !connectionStatus.connecting) {
                connect(store.dispatch);
            }
            break;
        case API_REQUEST:
            if (connectionStatus.connected) {
                handleApiRequest(store.dispatch, action.apiName, action.parameters);
            } else {
                console.warn('Trashed api request: ', apiName);
            }
            break;
    }
}