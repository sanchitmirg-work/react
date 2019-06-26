import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


const logInReducer = (state = {}, action) => {
    switch(action.type) {
        case 'SIGN_IN' : {
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