import axiosWithAuth from '../Utils/AxiosWithAuth';
export const ADD_PLANT = "ADD_PLANT";
export const SIGN_UP = "SIGN_UP";
export const LOG_IN = "LOG_IN";
export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const DELETE_PLANT="DELETE_PLANT";
export const EDIT_PLANT="EDIT_PLANT";
export const EDIT_USER="EDIT_USER";

export const fetchPlants= (url) => {
    return(dispatch => {
        dispatch(fetchStart());
       axiosWithAuth()
        .get(url)
        .then(res => {
        dispatch({type: FETCH_SUCCESS, payload:res.data});
        })
        .catch(err => {
            console.log("ERROR", err)
            dispatch({type: FETCH_FAIL, payload: err})
        })
    })
}

export const signUp = () => {
    return({type: SIGN_UP})
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
export const addPlant = (newPlant) => {
    return({type: ADD_PLANT, payload: newPlant})
}
export const deletePlant = (id) => {
    return({type: DELETE_PLANT, payload:id})
}
export const editPlant = (plantObj) => {
    return({type: EDIT_PLANT, payload: plantObj})
}
export const editUser = (userData) => {
    return({type: EDIT_USER, payload: userData})
}