import { GENDERCHANGE, NUMDECREASE, NUMINCREASE, NAMEUPDATE } from './action-types.js';

// 修改性别
export const genderChange = (data) => ({ type: GENDERCHANGE, data });

// 增加数字
export const numIncrease = (data) => ({ type: NUMINCREASE, data });

// 减小数字
export const numDncrease = (data) => ({ type: NUMDECREASE, data });

// 修改名称
const nameUpdate = (data) => ({ type: NAMEUPDATE, data });

// 异步修改名称
export const nameUpdateAsyn = (data) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(nameUpdate(data));
        }, 2000);
    }
}