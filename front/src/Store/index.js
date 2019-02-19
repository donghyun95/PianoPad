import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger'
import MainReducer from '../Reducer/MainReducer';
const store = createStore(MainReducer,applyMiddleware(logger));

export default store;