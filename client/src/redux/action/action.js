import {SIGNUP, SIGNIN, GET_USER, BOOK_TRAINING, ADD_TRAINING, GET_ALL_TRAINING, LOGOUT} from '../action-type/action-type'
import axios from 'axios'


//user, history
export const signUp=(data) => async(dispatch)=>{
    console.log(data)
    try {
        const userwhosignup = await axios.post('http://localhost:5000/signup',data);
        console.log(userwhosignup)
        dispatch({
                type:SIGNUP, 
                payload:userwhosignup.data
            })
           
        } catch (error) {
            console.log (error)
        }
    }

export const signIn=(data, history) => async(dispatch)=>{
  
    try {
        const userwhosignin = await axios.post('http://localhost:5000/signin', data);
        dispatch({
                type:SIGNIN,
                payload:userwhosignin.data
        })
        console.log (userwhosignin.data)
       dispatch(currentUser( userwhosignin.data.token, history))
    } catch (error) {
        console.log (error)
    }
}


export const currentUser=(token, history) => async(dispatch)=>{

    const config = { headers:{authorization:token}}
    try {
        const user = await axios.get('http://localhost:5000/current', config);
        dispatch({
                type:GET_USER, 
                payload:user.data
        })
        localStorage.setItem('current_user', JSON.stringify(user.data));
        history.push('/Profile')

        
    } catch (error) {
        console.log (error)
    }
}

export const bookTraining=(data) => async(dispatch)=>{
    try {
        const bookedtraining = await axios.post('http://localhost:5000/addcalender',data);
        dispatch({
                type:BOOK_TRAINING,
                payload:bookedtraining.data
        })
    } catch (error) {
        console.log (error)
    }
}

export const addTraining=(data,history) => async(dispatch)=>{
    try {
        const addedtraining = await axios.post('http://localhost:5000/addtrainig',data);
        dispatch({
                type:ADD_TRAINING,
                payload:addedtraining.data
        })
        history.push("/Courses")
    } catch (error) {
        console.log (error)
    }
}

export const getAllTraining=() => async(dispatch)=>{
    try {
        const res = await axios.get('http://localhost:5000/listtrainings');
        dispatch({
                type:GET_ALL_TRAINING,
                payload:res.data.Training,
        })
    } catch (error) {
        console.log (error)
    }
}
