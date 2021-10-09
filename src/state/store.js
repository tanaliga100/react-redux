import { createStore } from 'redux'
import { applyMiddleware } from 'redux';
import reducers from './reducers/index.js'
import thunk from 'redux-thunk'


export const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk)
)