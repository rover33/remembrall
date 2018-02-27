import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, UNAUTH_USER, AUTH_ERROR, FETCH_MESSAGE } from './types';

const ROOT_URL = process.env.NODE_ENV=== '/api' ? 'http://localhost:3000/api' : '';

// const ROOT_URL = 'http://localhost:3000/api'





//auth
export function signinUser({email, password}){
    return (dispatch) =>{
        //submit email/pwd to server
        axios.post(`${ROOT_URL}/signin`, {email, password})
            .then(response =>{
                //if request is good update user to authenticated
                dispatch({ type: AUTH_USER })

                //save JWT Token
                localStorage.setItem('token', response.data.token)

                //redired to route /reminder
                browserHistory.push('/reminders')
            })
            .catch(() => {
            //if request is bad show an error

                dispatch(authError('Not a valid login or password'))
        })
    }
}

export function signupUser({email, password}){
    return (dispatch) =>{
        //submit email/pwd to server
        axios.post(`${ROOT_URL}/signup`, {email, password})
            .then(response =>{
                //if request is good update user to authenticated
                dispatch({ type: AUTH_USER })

                //save JWT Token
                localStorage.setItem('token', response.data.token)

                //redired to route /reminder
                browserHistory.push('/reminders')
            })
            .catch(serve => {
                dispatch(authError(serve.response.data.error))
        })
    }
}

export function authError(error){
    return {
        type: AUTH_ERROR,
        payload: error
    }
}

export function signoutUser(){
    localStorage.removeItem('token')
    return { type: UNAUTH_USER }
}

export function fetchMessage() {
    return function (dispatch){
       const request = axios.get(ROOT_URL, {
            headers: { authorization: localStorage.getItem('token') }
        })
        return {
                type: FETCH_MESSAGE,
                payload: request
        }
    }
}