import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import reduxThunk from 'redux-thunk'


import './index.css';
import App from './components/App';
import Signin from './components/auth/signin';
import reducers from './reducers';



const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)


ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <Route path="signin" component={Signin}>
                </Route>
            </Route>
        </Router>
    </Provider>,
    document.querySelector('#root'));


