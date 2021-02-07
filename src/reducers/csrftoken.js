import {FETCH_CSRF_PENDING,FETCH_CSRF_SUCCESS,FETCH_CSRF_ERROR} from '../actions/csrfactions';

const initialState = {
    pending: false,
    csrftoken: '',
    error: null
}

export const csrfReducer=(state = initialState, action)=> {
    switch(action.type) {
        case FETCH_CSRF_PENDING: 
            return {
                ...state,
                pending: true
            }
        case FETCH_CSRF_SUCCESS:
            return {
                ...state,
                pending: false,
                csrftoken: action.csrftoken
            }
        case FETCH_CSRF_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default: 
            return state;
    }
}

export const getCsrf = state => state.csrftoken;
export const getCsrfPending = state => state.pending;
export const getCsrfError = state => state.error;