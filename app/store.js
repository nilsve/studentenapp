import {
    createStore, 
    applyMiddleware, 
    combineReducers, 
    compose
} from 'redux';

import thunk from 'redux-thunk';
 
import apisReducers from './apis/reducers';
import apisMiddleware from './apis/middleware/apis';
import authReducer from './auth/reducers';
import messagesReducer from './messages/reducers';

const rootReducer = combineReducers({
    apis: apisReducers, 
    auth: authReducer, 
    messages: messagesReducer,  
});

export default createStore(rootReducer, applyMiddleware(
    thunk,
    apisMiddleware,
));