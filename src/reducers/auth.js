import { FETCH_AUTH_PENDING, FETCH_AUTH_SUCCESS, FETCH_AUTH_ERROR } from '../actions/authactions';

const initialState = {
    pending: false,
    user: {},
    error: null
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_AUTH_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_AUTH_SUCCESS:
            return {
                ...state,
                pending: false,
                user: action.user
            }
        case FETCH_AUTH_ERROR:
            return {
                user:{},
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getAuth = state => state.user;
export const getAuthPending = state => state.pending;
export const getAuthError = state => state.error;