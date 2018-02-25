import Socket from '../Socket';
import config from '../../settings.json';

import {
    CONNECT_APIS,
    CONNECTED_APIS,
} from '../constants';

let socket = null;

async function connect(dispatch) {
    if (!socket) {
        socket = new Socket();
        console.log(config)

        // TIJDELIJK
        dispatch({
            type: CONNECTED_APIS,
        })
        // await socket.connectWebSocket(config.api.domain);
    }
}

export default store => next => action => {
    next(action);
    
    switch (action.type) {
        case CONNECT_APIS:
            connect(store.dispatch);
            break;
    }
}