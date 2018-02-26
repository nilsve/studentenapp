import { 
    CONNECT_APIS,
    CONNECTED_APIS,
    DISCONNECTED_APIS,
} from "../constants";

const initialState = { 
    connected: false,
    connecting: false,
    requestCount: 0,
};
 
export default function(state = initialState, action) {
    switch (action.type) {
        case CONNECT_APIS:
            return {
                ...state,
                connecting: true,
                connected: false,
            };
        case CONNECTED_APIS:
            return {
                ...state,
                connected: true,
                connecting: false,
            };
        case DISCONNECTED_APIS:
            return {
                ...state,
                connected: false,
                connecting: false,
            };
        case API_REQUEST:
            return {
                ...state,
                requestCount: state.requestCount + 1,
            }
        default:
            return state;
    }
};