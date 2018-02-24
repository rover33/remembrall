import axios from 'axios';
import { browserHistory } from 'react-router';
import { AUTH_USER, AUTH_ERROR } from './types';

const ROOT_URL = 'http://localhost:3000/api'

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
                browserHistory.push('/reminder')
            })
            .catch()
            //if equest is bad show an error

                dispatch(authError('Not a valid login or password'))
    }
}

export function authError(error){
    return {
        type: AUTH_ERROR,
        payload: error
    }
}