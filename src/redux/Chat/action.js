

export const ROOM = 'ROOM';
export const OTHER_USER = 'OTHER_USER';

const action = {};

action.SaveRoom = function (data) {
    return async function (dispatch) {
        dispatch({ type: ROOM, payload: data });
    };
};

action.SaveOtherUser = function (data) {
    return async function (dispatch) {
        dispatch({ type: OTHER_USER, payload: data });
    };
};



export default action;
