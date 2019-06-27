import login from '../api/login';
import history from '../history';

export const signIn = (detail) => {
    return async(dispatch) => {
        // const response = await login.post('/api/login', detail)

        login.post('/api/login', detail).then((response) => {
            history.push('/dashboard')
            dispatch({type: 'SIGN_IN', payload: response.data})
        }, (error) => {
            console.log("error",error)
            history.push('/login')
            dispatch({type: 'ERROR', payload: error.response.data})
        })
        
    }
    
}