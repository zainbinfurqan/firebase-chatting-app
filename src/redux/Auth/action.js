

export const SET_USERDATA = 'SET_USERDATA';
export const LOGOUT = 'LOGOUT';

const action = {};

action.saveUserData = function (data) {
    return async function (dispatch) {
        dispatch({ type: SET_USERDATA, payload: data });
    };
};

action.logOut = function () {
    return async function (dispatch) {
        dispatch({ type: LOGOUT, });
    };
};


export default action;
