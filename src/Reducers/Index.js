import { SIGN_UP, LOG_IN, FETCH_START, FETCH_SUCCESS, FETCH_FAIL, ADD_PLANT, EDIT_PLANT, EDIT_USER, DELETE_PLANT } from '../Actions/Index'
const initialState = {
    plantList: [],
    isFetching: false,
    error: '',
    currentUser: {
        user_id: null,
        username: '',
        phoneNumber: '',
        password: '',
    },
}

export const Reducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP:
            return ({
                ...state,
            })
        case LOG_IN:
            console.log("ACTION", action)
            return ({
                ...state,
                currentUser: {
                    user_id: action.payload.user_id,
                    username: action.payload.username,
                    password: action.payload.password,
                }
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
        case EDIT_USER:
            return ({
                ...state,
                currentUser: {
                    phoneNumber: action.payload.phoneNumber,
                    password: action.payload.password,
                }
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