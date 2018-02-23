import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './header';


export default class App extends Component {
 render() {
   return (
     <div>
       <Header />
       {this.props.children}
     </div>
   )
  }
     
}
