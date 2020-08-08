import { combineReducers } from 'redux';
import Auth from './Auth/reducer'
import Chat from './Chat/reducer'

export default combineReducers({
    Auth,
    Chat
});
