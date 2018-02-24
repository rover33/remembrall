import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions'

class Reminders extends Component {
    componentWillMount(){
        this.props.fetchMessage()
    }


    render() {
        return (
            <div>This is reminder page</div>
        )
    }
}


export default connect (null, actions)(Reminders)