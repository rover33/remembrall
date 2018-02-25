import { combineReducers } from 'redux'
import { reducer as form } from 'redux-form'
import authReducer from './auth_reducer'
import msg from './message_reducer';


const rootReducer = combineReducers({
    form,
    auth: authReducer,
    msg
})

export default rootReducer;