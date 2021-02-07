export const FETCH_CSRF_PENDING = 'FETCH_CSRF_PENDING';
export const FETCH_CSRF_SUCCESS = 'FETCH_CSRF_SUCCESS';
export const FETCH_CSRF_ERROR = 'FETCH_CSRF_ERROR';

export const fetchCsrfPending=() =>{
    return {
        type: FETCH_CSRF_PENDING
    }
}

export const fetchCsrfSuccess=(csrftoken)=> {
    return {
        type: FETCH_CSRF_SUCCESS,
        csrftoken: csrftoken
    }
}

export const fetchCsrfError=(error)=> {
    return {
        type: FETCH_CSRF_ERROR,
        error: error
    }
}