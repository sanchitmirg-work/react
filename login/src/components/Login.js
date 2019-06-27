import React from 'react';

import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';

import {signIn} from '../actions'

class Login extends React.Component {
    
    renderError(meta) {
        if(meta.touched && meta.error) {
            return (
                <div>{meta.error}</div>
            )
        }
    }

    renderInput = ({input, label, meta}) => {
        return (

            <div className="field">
                <label>{label}</label>
                <input {...input} />
                <div style={{color:'red'}}>{this.renderError(meta)}</div>
            </div>
        )
    }

    renderInputPassword = ({input, label, meta}) => {
        return (

            <div className="field">
                <label>{label}</label>
                <input {...input} type="password"/>
                <div style={{color:'red'}}>{this.renderError(meta)}</div>
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.signIn(formValues)
    }  

    renderLoginError() {
        if(this.props.login && this.props.login.error) {
            return (
                <div style={{color:'red', margin:'10px'}}>
                    <h3>{this.props.login.error}</h3>

                </div>
            )
        }
    }

    render() {
        
        return (
            <div style={{margin: '50px'}}>
                {this.renderLoginError()}
                <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                    <Field name="email" label="Email" component={this.renderInput}/>
                    <Field name="password" label="Password" component={this.renderInputPassword}/>
                    <button className="ui button primary">Submit</button>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {login: state.login}
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.email) {
        errors.email = 'Required Field'
    } 
    if(!formValues.password) {
        errors.password = 'Required Field'
    }

    return errors;
}

const formWrapped = reduxForm({
    form: 'loginForm',
    validate
})(Login);

export default connect(mapStateToProps, {
    signIn
})(formWrapped);