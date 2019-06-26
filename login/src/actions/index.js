import login from '../api/login';
import history from '../history';

export const signIn = (detail) => {
    return async(dispatch) => {
        const response = await login.post('/api/login', detail)
        history.push('/dashboard')
        dispatch({type: 'SIGN_IN', payload: response.data})
    }
    
}