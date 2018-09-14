import { createStore, compose, applyMiddleware } from 'redux';

import reducer from './reducers';
import logging from '../store/middleware/logging';
import turnOnAsync from '../store/middleware/turnOnAsync';

const store = createStore(reducer, applyMiddleware(logging, turnOnAsync));

export default store;
