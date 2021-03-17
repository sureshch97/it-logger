import {combineReducers} from 'redux'
import logReducers from './logReducers';
import techReducers from './techReducers'


export default combineReducers({
    log:logReducers,
    tech:techReducers
});