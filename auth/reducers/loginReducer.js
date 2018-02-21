import { 
    LOGIN 
} from "../actions/login";
 
export default authReducer = (state = dataState, action) => {
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