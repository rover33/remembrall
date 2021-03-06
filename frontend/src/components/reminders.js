import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import axios from 'axios'
import Date from './dates/date'

let ROOT_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api' : '/api'
// if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
//     console.log("root url is local " + ROOT_URL)
//     var ROOT_URL = 'http://localhost:3000/api'
//   }else{
    
//     var ROOT_URL = '/api'
//     console.log("root url is prod" + ROOT_URL)
//   }


export default class Reminders extends Component {
   constructor(props){
       super(props)
       this.state = {
           to: '',
           body: '',
       }
   }



 smsSend = (event) =>{
    //  event.preventDefault()
     axios({
         method: "post",
         url: `${ROOT_URL}/sms`,
         data:{
            to: this.state.to,
            body: this.state.body
            
         }
     })
     .then(response => {
         console.log('hello world')
         this.setState({body: '', to: ''})
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

 timeChange = () =>{

 }


    render() {
        return (
           <div className='messageForm'>
               <h1 className='headerR'>Send Messages</h1>
               <form onSubmit={event=>this.smsSend(event)}>
                    <input className='messageBox' placeholder='message' value={this.state.body} onChange={event=>this.handleChange(event)}/>
                    <input className='phoneNumber' placeholder='+123456789' value={this.state.to} onChange={event=>this.numberChange(event)}/>
                    <Date className='dateTime' />
                    <button className='btn btn-primary sendButton'>Send Message</button>
               </form>
           </div>
        )
    }
}
