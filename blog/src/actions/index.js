import jsonPlaceholder from '../apis/jsonPlaceholder';
import _ from 'lodash';


export const fetchPostAndUsers = () => async (dispatch, getState) => {

   await dispatch(fetchPosts());
   const userIds = _.uniq(_.map(getState().posts, 'userId'));
    //console.log('user ids are', userIds)
   userIds.forEach(id => dispatch(fetchUser(id)));

   //refactor of above code
   //chain function argument will be passed as argument to chaining function like map.
   //so map will get getState().posts as first argument by default
  /*  _.chain(getState().posts)
   .map('userId')
   .uniq()
   .forEach(id => dispatch(fetchUser(id))); 
   .value()*/
}


export const fetchPosts =  () => {

    return async (dispatch) => {
        const response =  await jsonPlaceholder.get('/posts')
        
        dispatch({type:'FETCH_POSTS', payload: response['data']})

    }    
}

export const fetchUser =  (id) => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get(`/users/${id}`)

        dispatch({type:'FETCH_USER', payload: response['data']})
    }
}

const _fetchUser = _.memoize(async (id, dispatch) => {
    const response =  await jsonPlaceholder.get(`/users/${id}`)
    
    dispatch({type:'FETCH_USER', payload: response['data']})
})


//memoize solution for making only one API request with same parameter
// export const fetchUser =  (id) => dispatch => {
//     _fetchUser(id, dispatch)  
// }

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response =  await jsonPlaceholder.get(`/users/${id}`)
    
//     dispatch({type:'FETCH_USER', payload: response['data']})
// })