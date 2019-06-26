import React from 'react';

import { connect } from 'react-redux';

import history from '../history';

class Auth extends React.Component {

    componentDidMount() {
        if(!this.props.login.email) {
            history.push('/login')
        } else {
            history.push('/dashboard')
        }
    }

    render() {
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {login: state.login}
}

export default connect(mapStateToProps)(Auth);