import { SIGN_UP, LOG_IN, FETCH_START, FETCH_SUCCESS, FETCH_FAIL } from '../Actions/Index'
const initialState = {
    plantList: [
            {}
        ],
    isFetching: false,
    error: '', 
}

export const Reducer = (state=initialState, action) => {
    switch(action.type) {
        case SIGN_UP:
            return ({
                ...state,
            })
        case LOG_IN:
            return ({
                ...state,
            })
        case FETCH_START:
            return ({
                ...state,
                isFetching: true,
                error: '',
            })
        case FETCH_SUCCESS:
            return ({
                ...state,
                plantList: action.payload,
                isFetching: false,
                error:''
            })
        case FETCH_FAIL:
            return ({
                ...state,
                isFetching: false,
                error: action.payload,
            })
        default:
            return state
    }
}