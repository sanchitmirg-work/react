import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const logInReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SIGN_IN' : {
            return {...state, ...action.payload}
        }

        case 'ERROR' : {
            return {...state, ...action.payload}
        }

        default : {
            return state;
        }
    }
}

export default combineReducers({
    login: logInReducer,
    form: formReducer
})