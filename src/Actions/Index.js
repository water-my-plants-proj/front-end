import axiosWithAuth from '../Utils/AxiosWithAuth';

export const SIGN_UP = "SIGN_UP";
export const LOG_IN = "LOG_IN";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";

export const fetchPlants= () => {
    return(dispatch => {
        dispatch(fetchStart());

       axiosWithAuth()
        .get('https://plantszapi.herokuapp.com/')
        .then(res => {
        dispatch({type: FETCH_SUCCESS, payload: /*figure out what payload will be */})
        })
        .catch(err => {
            console.log("ERROR", err)
            dispatch({type: FETCH_FAIL, payload: err})
        })
    })
}

export const signUp = (userData) => {
    return({type: SIGN_IN, payload: userData})
}

export const logIn = (userData) => {
    return({type: LOG_IN, payload: userData})
}

export const fetchStart = () => {
    return({type: FETCH_START})
} 
export const fetchSuccess = (plantList) => {
    return({type: FETCH_SUCCESS, payload: plantList})
} 
export const fetchFail = (err) => {
    return({type: FETCH_FAIL, payload: err})
} 