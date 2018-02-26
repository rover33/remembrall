import React, { Component } from 'react';
import { reduxForm, Field, Form } from 'redux-form';
import axios from 'axios'
import { connect } from 'react-redux'
import * as actions from '../actions'

const ROOT_URL = 'http://localhost:3000/api'


export default class Reminders extends Component {
   constructor(props){
       super(props)
       this.state = {
           to: '',
           body: ''
       }
   }



 smsSend = () =>{
     console.log('smsSend')
     axios({
         method: "post",
         url: `${ROOT_URL}/sms`,
         data:{
            to: this.state.to,
            body: this.state.body
         }
     })
     .then(response => {
         console.log(response)
     }) 
 }

 handleChange = event =>{
     this.setState({
         body: event.target.value
     })
 }

 numberChange = event =>{
     this.setState({
         to: event.target.value
     })
 }


    render() {
        return (
           <div className='col-md-4 align-items-center'>
               <h1>Hello World</h1>
               <input className='messageBox' type='text' placeholder='message' value={this.state.body} onChange={event=>this.handleChange(event)}/>
               <input className='phoneNumber' placeholder='+123456789' value={this.state.to} onChange={event=>this.numberChange(event)}/>
               <button className='col-md-6' onClick={this.smsSend} >Send Message</button>
           </div>
        )
    }
}

