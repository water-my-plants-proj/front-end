import { SIGN_UP, LOG_IN, FETCH_START, FETCH_SUCCESS, FETCH_FAIL,ADD_PLANT,DELETE_PLANT,EDIT_PLANT } from '../Actions/Index'
const initialState = {
    plantList: [
    ],
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
                plantList:[...state.plantList,action.payload]
            })
            case DELETE_PLANT:
                console.log(action.payload)
                return ({
                    ...state,
                    plantList:state.plantList.filter((item)=>{ return action.payload!==item.plant_id})
                })
                case EDIT_PLANT:
                    return ({
                        ...state,
                         plantList:[ action.payload,...state.plantList.filter((item)=>{ return action.payload.plant_id!==item.plant_id})]
                        
                    })
        default:
            return state
    }
}