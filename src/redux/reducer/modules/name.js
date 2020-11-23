import {  NAMEUPDATE } from '../../action-types'

const initName = "cc"

// 名称
export default function name(state = initName, action) {
    switch (action.type) {
        case NAMEUPDATE: return action.data;
        default: return state;
    }
}