
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field, Form } from 'redux-form';
import * as actions from '../../actions';

const renderInput = (field) => {
    const { label, type, input, meta: { error, touched } } = field;
    return (
        <div>
            <label>{label}:</label>
            <input {...input} type={type}className="form-control" />
                {touched && error && <div className="error">{error}</div>}
        </div>
    );
}

class Signin extends Component {
    handleFormSubmit({ email, password }) {
        console.log(email, password);

        this.props.signinUser({ email, password });
    }

    renderAlert() {
        // const { errorMessage } = this.props;
        if (this.props.errorMessage) {
            return (
                <div className="alert alert-danger">
                    <strong>{this.props.errorMessage}</strong>
                </div>
            );
        }
    }
    

    render(){
        const { handleSubmit } = this.props;

        return (
            <Form className='logIn' onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
                
                <div className="form-group email">
                    <Field name="email" type="email" component={renderInput} label='Email'/>
                </div>
                <div className="form-group password">
                    <Field name="password" type="password" component={renderInput} label='Password' />
                </div>
                {this.renderAlert()}
                <button action="submit" className="btn btn-primary signB">Sign in</button>
            </Form>
        );
    }
}

function mapStateToProps(state) {
    return { 
        errorMessage: state.auth.error
     };
}

Signin = reduxForm({
    form: 'signin'
   })(Signin);
   export default connect(mapStateToProps, actions)(Signin);
