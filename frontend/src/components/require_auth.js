import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

export default (ComposedComponent) => {
    class Authentication extends Component{

        //gives any other pieces of code in application ability to refrence authentication.contextTypes
        static contextTypes = {
            router: PropTypes.object
        }

        componentWillMount(){
            if (!this.props.authenticated){
                this.context.router.push('/')
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.authenticated){
                this.context.router.push('/')
            }
        }

        render(){
            console.log(this.props.authenticated)
            return <ComposedComponent {...this.props} />
        }
    }

    function mapStateToProps(state){
        return { authenticated: state.authenticated}
    }

    return connect(mapStateToProps)(Authentication)
}

