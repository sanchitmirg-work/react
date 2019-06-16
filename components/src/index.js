import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Test from './test'

//if need to pass multiple components then we can use slot
//we can do like <ApprovalCard test={<test/>}>
//then props object will have test component corresponding to test key.
const App = () => {
    return (
        <div className="ui container comments">

            <ApprovalCard>
                <CommentDetail author="Sam" />
            </ApprovalCard>

        </div>
    );
};

ReactDOM.render(
    <App />, document.querySelector('#root')
)