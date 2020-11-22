// 这个方法的作用就是用来整合所有的reducer
import { combineReducers } from 'redux'

import { GENDERCHANGE } from './action-types'

// let temp = {

// }

// export default combineReducers({ ...temp });

// 修改性别
function gender(state = "男", action) {
    switch (action.type) {
        case GENDERCHANGE: return action.data;
        default: return state;
    }
}

export default combineReducers({ gender })