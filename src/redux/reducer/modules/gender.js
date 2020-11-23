import {  GENDERCHANGE } from '../../action-types'

const initGender = "男"

// 性别
export default function gender(state = initGender, action) {
    switch (action.type) {
        case GENDERCHANGE: return action.data;
        default: return state;
    }
}