import {SIGNUP, SIGNIN, GET_USER, BOOK_TRAINING, ADD_TRAINING, GET_ALL_TRAINING} from '../action-type/action-type'

const initialState={
    user:{},
    usersignup:{},
    bookedtraining:{},
    addedtraining:{},
    currentUser:{},
    listtraining:[],
} 

const contactReducer = (state=initialState, action) =>{
switch (action.type) {
    case SIGNUP: return{
        ...state, 
        usersignup:action.payload
    }
    case SIGNIN: return{
        ...state, 
        user:action.payload
    }
    case BOOK_TRAINING: return{
        ...state, 
        bookedtraining:action.payload
    }
    case ADD_TRAINING: return{
        ...state, 
        addedtraining:action.payload
    }
    case GET_ALL_TRAINING:return{
        ...state, 
        listtraining:action.payload
    }
    case GET_USER: return{
        ...state, 
        currentUser:action.payload
    }
    default:
return state
}
}

export default contactReducer