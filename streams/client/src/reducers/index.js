import {combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import streamReducer from './streamReducer'

const INITIAL_STATE ={
    isSignedIn: null,
    userId: null,
    streams: []
}
const  authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SIGN_IN': {
            return {...state, isSignedIn: true, userId: action.payload}
        }

        case 'SIGN_OUT': {
            return {...state, isSignedIn: false,userId: null}
        }

        /* case 'GET_STREAMS': {
            return {...state, streams: [...streams, action.payload]}
        } */

        default: {
            return state;
        } 
    }
}

export default combineReducers({
    authReducer: authReducer,
    form: formReducer,
    streams: streamReducer
})