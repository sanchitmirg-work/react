import streams from '../api/streams';

export const signIn = (id) => {
    return {
        type: 'SIGN_IN',
        payload: id
    }
}

export const signOut = () => {
    return {
        type: 'SIGN_OUT'
    }
}

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');
        dispatch({type: 'FETCH_STREAMS', payload: response.data})
    }
}

export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        const {userId} = getState().authReducer;
        const response = await streams.post('/streams', {...formValues, userId});
        dispatch({type: 'CREATE_STREAM', payload: response.data})
    }
}

export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`);
        dispatch({type: 'FETCH_STREAM', payload: response.data})
    }
}

export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);
        dispatch({type: 'DELETE_STREAM', payload: id})
    }
}

export const editStream = (id, formValues) => {
    return async (dispatch) => {
        const response = await streams.put(`/streams/${id}`, formValues);
        dispatch({type: 'EDIT_STREAM', payload: response.data})
    }
}


//FETCH_STREAMS
//FETCH_STREAM
//DELTE_STREAM
//EDIT_STREAM