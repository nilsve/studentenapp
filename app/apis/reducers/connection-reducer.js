import { 
    CONNECT_APIS,
    CONNECTED_APIS,
} from "../constants";

const initialState = { 
    connected: false,
    connecting: false,
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
        default:
            return state;
    }
};