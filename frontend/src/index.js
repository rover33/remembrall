import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
// import { BroswerRouter, Route, Switch } from 'react-router-dom'
import reduxThunk from 'redux-thunk'


import './index.css';
import App from './components/App';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import Reminders from './components/reminders';
import RequireAuth from './components/auth/require_auth';
import Landing from './components/Landing';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';




const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token')
if (token) {
    store.dispatch({ type: AUTH_USER})
}


ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Landing} />
                <Route path="signin" component={Signin} />
                <Route path='signout' component={Signout} />
                <Route path='signup' component={Signup} />
                <Route path='reminders' component={RequireAuth(Reminders)} />
            </Route>
        </Router>
    </Provider>,
    document.querySelector('#root'));


    // ReactDOM.render(
    //     <Provider store={store}>
    //         <BrowserRouter>
    //             <Switch>
    //                 <Route exact path="/" component={App}>
    //                     <Route exact path='/' component={Landing} />
    //                     <Route path="signin" component={Signin} />
    //                     <Route path='signout' component={Signout} />
    //                     <Route path='signup' component={Signup} />
    //                     <Route path='reminders' component={RequireAuth(Reminders)} />
    //                 </Route>
    //             </Switch>
    //         </BrowserRouter>
    //     </Provider>,
    //     document.querySelector('#root'));


