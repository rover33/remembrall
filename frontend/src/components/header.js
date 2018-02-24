import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component{
    render(){
        return(
            <nav className="navbar navbar-light">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link to='/signin'>Sign in</Link>
                    </li>
                    <li className="nav-item">
                    </li> 
                    <li className="nav-item">
                    </li>
                </ul>
            </nav>
        )
    }
}

function mapStateToProps(state){
    return {authenticated: state.authenticated}
}

export default connect(mapStateToProps, actions)(Header);