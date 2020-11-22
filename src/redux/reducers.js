// 这个方法的作用就是用来整合所有的reducer
import { combineReducers } from 'redux'

import { GENDERCHANGE, NUMDECREASE, NUMINCREASE, NAMEUPDATE } from './action-types'

const initGender = "男"
const initNum = 0
const initName = "cc"

// let temp = {

// }

// export default combineReducers({ ...temp });

// 性别
function gender(state = initGender, action) {
    switch (action.type) {
        case GENDERCHANGE: return action.data;
        default: return state;
    }
}

// 数字
function num(state = initNum, action) {
    let data = parseInt(action.data);

    switch (action.type) {
        case NUMINCREASE: return state + data;
        case NUMDECREASE: return state - data;
        default: return state;
    }
}

// 名称
function name(state = initName, action) {
    switch (action.type) {
        case NAMEUPDATE: return action.data;
        default: return state;
    }
}


export default combineReducers({ gender, num, name })