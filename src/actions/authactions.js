export const FETCH_AUTH_PENDING = 'FETCH_AUTH_PENDING';
export const FETCH_AUTH_SUCCESS = 'FETCH_AUTH_SUCCESS';
export const FETCH_AUTH_ERROR = 'FETCH_AUTH_ERROR';

export const fetchAuthPending=() =>{
    return {
        type: FETCH_AUTH_PENDING
    }
}

export const fetchAuthSuccess=(user)=> {
    return {
        type: FETCH_AUTH_SUCCESS,
        user: user
    }
}

export const fetchAuthError=(error)=> {
    return {
        type: FETCH_AUTH_ERROR,
        error: error
    }
}