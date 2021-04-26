import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker"
import AsyncStorage from '@react-native-async-storage/async-storage';
import {navigate} from "../navigationRef"

const authReducer=(state,action)=>{
    switch (action.type) {
        case "addErrorMessage":
            return {...state, errorMessage : action.payload}
        
        case "clearErrorMessage":
            return {...state, errorMessage:""}    

        case "signup":
            return {errorMessage: "", token:action.payload} 
        
        case "signout":
            return {token:null, errorMessage:""} 

        default:
            return state;
    }
}

const signup= dispatch =>{
    return async ({email,password})=>{
    try {
        const response= await trackerApi.post("/signup",{email,password});
        await AsyncStorage.setItem("token",response.data.token);
        dispatch({type:"signup",payload:response.data.token})
        navigate("TrackList")
    } catch (error) {
        
        dispatch({type:"addErrorMessage",payload:"Something went wrong"})
    } 
    }
}

const signin= dispatch =>{
    return async ({email,password})=>{
        try {
            const response= await trackerApi.post('/signin',{email,password})
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type:'signup',payload: response.data.token})
            navigate("TrackList")          
        } catch (error) {
            dispatch({type:"addErrorMessage",payload:"Something went wrong please try again later"})
        }

    }
}

const autoSignin= dispatch=> async ()=>{

    const token= await AsyncStorage.getItem("token");
    if (token){
        dispatch({type:'signup',payload: token});
        navigate("mainFlow")
    }else{
        navigate("Signup")
    }
}

const signout= dispatch=>{
    return async ()=>{
      await AsyncStorage.removeItem("token");
      dispatch({type:"signout"});
      navigate("Signup");

    }
}

const clearErrorMessage = dispatch =>()=>{ dispatch({type:"clearErrorMessage"})} ;



export const {Provider, Context}= createDataContext(authReducer,
    {
        signup,
        signin,
        clearErrorMessage,
        autoSignin,
        signout
    },
    {
        
        errorMessage: "",
        token:""
    }
);