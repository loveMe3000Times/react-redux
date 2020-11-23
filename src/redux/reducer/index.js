import { combineReducers } from 'redux';

import name from './modules/name.js'
import num from './modules/num.js'
import gender from './modules/gender'

export default combineReducers({
    name,
    num,
    gender
})