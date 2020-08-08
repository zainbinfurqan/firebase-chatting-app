import { OTHER_USER, ROOM } from './action';

const initialState = {
    room: {},
    otherUser: false
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ROOM:
            console.log("action.payload.room=>", action.payload)
            return { ...state, room: action.payload, };
        case OTHER_USER:
            console.log("action.payload.otherUser=>", action.payload)
            return { ...state, otherUser: action.payload, };

        default:
            return state;
    }
}
