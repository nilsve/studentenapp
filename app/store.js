import {
    createStore, 
    applyMiddleware, 
    combineReducers, 
    compose
} from 'redux';

import thunk from 'redux-thunk';
 
import apisReducers from './apis/reducers';
import apisMiddleware from './apis/middleware/setup';
import authReducer from './auth/reducers';

const rootReducer = combineReducers({
    apis: apisReducers, 
    auth: authReducer, 
});

export default createStore(rootReducer, applyMiddleware(
    thunk,
    apisMiddleware,
));