import { 
    LOGIN_SUCCESS,
} from "../constants";

const initialState = { 
    loggedOn: false,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            console.log('login succes');
            return {
                ...state,
                ...action.data,
                loggedOn: true,
            };
        default:
            return state;
    }
};