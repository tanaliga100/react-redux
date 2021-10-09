import {combineReducers} from 'redux'
import accountReducer from './accountReducer'
import otherReducer from './otherReducer'

const reducers = combineReducers({
    account: accountReducer,
    otherReducer: otherReducer

})

export default reducers;