import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import axios from 'axios'
import DatePicker from 'react-datepicker'
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css"
const ROOT_URL = 'http://localhost:3000/api'

export default class Date extends Component{
    constructor(props) {
        super(props)
        this.state = {
            startDate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
    }

   smsDate = (event) =>{
        //  event.preventDefault()
         axios({
             method: "post",
             url: `${ROOT_URL}/sms`,
             data:{
                startDate: this.state.startDate
             }
         })
         .then(response => {
             console.log('hello world')
             this.setState({startDate: ''})
         }) 
     }

    handleChange(date) {
        this.setState({
            startDate: date
        });
    }

    render() {
        return (
        <DatePicker className='react-datepicker'
        selected={this.state.startDate}
        onChange={this.handleChange}
        showTimeSelect
        timeFormat='HH:mm'
        timeIntervals={15}
        dateFormat='LLL'
        timeCaption='time'
        withPortal
       />
        )
    }
}