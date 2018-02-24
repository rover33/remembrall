import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/api'

export function signinUser({email, password}){
    return (dispatch) =>{
        axios.post(`${ROOT_URL}/signin`, {email, password})

    }
}