import { NUMINCREASE, NUMDECREASE } from '../../action-types'

const initNum = 0

// 数字
export default function num(state = initNum, action) {
    let data = parseInt(action.data);

    switch (action.type) {
        case NUMINCREASE: return state + data;
        case NUMDECREASE: return state - data;
        default: return state;
    }
}