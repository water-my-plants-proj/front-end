import { SIGN_UP, LOG_IN, FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_PLANT, EDIT_PLANT, DELETE_PLANT } from '../Actions/Index'
const initialState = {
    plantList: [],
    isFetching: false,
    error: '',
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
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
                error: ''
            })
        case FETCH_FAIL:
            return ({
                ...state,
                isFetching: false,
                error: action.payload,
            })
        case ADD_PLANT:
            return ({
                ...state,
                plantList: [...state.plantList, action.payload]
            })
        case EDIT_PLANT:
            return({
                ...state,
                plantList:  [...state.plantList.filter(plant => 
                    plant.plant_id !== action.payload.plant_id
                  ), action.payload]
            })
        case DELETE_PLANT:
            return ({
                ...state,
                plantList: state.plantList.filter(plant => plant.plant_id !== action.payload)
            })
        default:
            return state
    }
}