import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions'

class StreamCreate extends React.Component {
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
                <input {...input}/>
                <div>{this.renderError(meta)}</div>
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }   
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" label="Title" component={this.renderInput}/>
                <Field name="description" label="Description" component={this.renderInput}/>
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = 'Please fill this field'
    } 
    if(!formValues.description) {
        errors.description = 'Please fill the description'
    }

    return errors;
}

const mapStateToProps = () => {

}

const formWrapped = reduxForm({
    form: 'streamCreateForm',
    validate
})(StreamCreate);

export default connect(null, {
    createStream
})(formWrapped)