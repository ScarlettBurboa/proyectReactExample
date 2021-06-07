import {

    LOGIN_SUCCES,
} from '../actions/types/types'

const initialState = {
    token: null,
    isAuthenticated: null,
    isLoading: false,
}

const auth =  (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCES:{
            console.log('action.payload', action.payload)
            sessionStorage.setItem('token', action.payload)
            return {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                token: action.payload
            }
        }
        
        default:
            return state;
    }
}
export default auth;