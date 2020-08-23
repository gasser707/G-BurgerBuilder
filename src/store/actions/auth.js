import * as actionTypes from './actionTypes';
import axios from 'axios';
//for your code to work as mine, you will need to create a config.js where you will put your firebase auth keys
import * as keys from '../../config'
export const authStart = () => {

    return {
        type: actionTypes.AUTH_START
    }
}


export const authSuccess = (token,userId) => {

    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken: token,
        userId: userId
    }
}



export const authFail = (error) => {

    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout =()=>{
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('userId')
    return{
        type:actionTypes.AUTH_LOGOUT
    }

}

export const checkAuthTimeout = (expirationTime) =>{
    return dispatch =>{
        setTimeout(()=>{
            dispatch(logout())
        },expirationTime*1000)
    }
}

export const auth = (email, password, isSignUp) => {

    return dispatch => {
        dispatch(authStart());
        let authData = {
            email: email,
            password: password.toString(),
            returnSecureToken: true
        };

        let url 
        if(isSignUp)
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+keys.SIGNUP_KEY;
        else 
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+keys.SIGNIN_KEY;

        axios.post(url, authData).then(response => {
                const expirationDate = new Date (new Date().getTime()+response.data.expiresIn*1000)

                localStorage.setItem('token',response.data.idToken);
                localStorage.setItem('expirationDate',expirationDate);
                localStorage.setItem('userId',response.data.localId)

                dispatch(authSuccess(response.data.idToken,response.data.localId));
                dispatch(checkAuthTimeout(response.data.expiresIn))
            }).catch(error => {
                console.log(error)
                dispatch(authFail(error.response.data.error))
            })

    }
}


export const  authCheckState = () =>{

    return dispatch =>{
        const token = localStorage.getItem('token');
        if(!token){

            dispatch(logout())
        }
        else{
            const expirationDate = new Date (localStorage.getItem('expirationDate'));
            if(expirationDate<=new Date()){

                dispatch(logout())

            }else{

                const userId = localStorage.getItem('userId') 
                dispatch(authSuccess(token,userId));
                dispatch(checkAuthTimeout((expirationDate.getTime()-new Date().getTime())/1000))
            
            }
        }

    }

}