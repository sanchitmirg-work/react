import React from 'react';

import { connect } from 'react-redux';


class Dashboard extends React.Component {

    render() {
        
        return(
            <div>
                <h3 style={{margin: '30px' }}> Dashboard </h3>
                <div style={{margin: 'auto' }}>
                    <h2>{this.props.login.token}</h2>
                </div>
            </div>
        )
    }
}

const mapStateFromProps = (state) => {
    return { login: state.login }
}
export default connect(mapStateFromProps)(Dashboard);