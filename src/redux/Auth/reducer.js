import { SET_USERDATA, LOGOUT } from './action';

const initialState = {
    userData: {},
    isLogin: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_USERDATA:
            console.log("action.payload=>", action.payload)
            return { ...state, userData: action.payload, isLogin: true };
        case LOGOUT:
            return { ...state, userData: {}, isLogin: false };
        default:
            return state;
    }
}
