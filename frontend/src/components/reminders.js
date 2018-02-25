import React, { Component } from 'react';
import { reduxForm, Field, Form } from 'redux-form';
import { connect } from 'react-redux'
import * as actions from '../actions'

class Reminders extends Component {
    componentWillMount(){
        this.props.fetchMessage()
    }


    render() {
        return (
           <div className='col-md-4 align-items-center'>
               <h1>Hello World</h1>
               <input type="text" placeholder="add message here"/>
               <button action="submit" className="btn btn-primary">Schedule</button>
           </div>
        )
    }
}

function mapStateToProps(state){
    return {message: state.msg.message }
}

export default connect (mapStateToProps, actions)(Reminders)