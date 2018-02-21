import {createStore, applyMiddleware, combineReducers, compose} from 'redux';

import * as authReducers from './auth/reducers';

const reducers = combineReducers({
    auth: combineReducers(authReducers),
});

export default createStore(reducers, applyMiddleware(thunk));