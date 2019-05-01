// 1 import react and react dom library
import React from 'react';
import ReactDOM from 'react-dom';

//2 create a react component
const App = function () {
    return (
        <div>
            <label htmlFor="name">Enter Username</label>
            <input id="name" type="text" />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>Submit</button>
        </div>
    )
};

//3 take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)