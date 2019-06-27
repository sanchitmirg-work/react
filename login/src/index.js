import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';

import App from './components/App';

//Creating Store
const store = createStore(reducers, applyMiddleware(reduxThunk))

//Wrapping the App component inside Provider component provided by react-redux
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.querySelector('#root')
)