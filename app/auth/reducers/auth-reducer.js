import { 
    LOGIN,
} from "../constants";

const initialState = { 
    loggedOn: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                ...action.data,
                loggedOn: true,
            };
        default:
            return state;
    }
};