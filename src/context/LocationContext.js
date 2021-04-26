import createDataContext from './createDataContext';
import React from 'react'

const locationReducer= (state,action)=>{
   
    switch (action.type) {
        case "add_location":
            return {...state, currentLocation:action.payload}
        
        case "record_location":
            return {...state, location:[...state.location, action.payload]}

        case "recording":
            return {...state, recording:action.payload}    
        
        case "change_name":
            return {...state, name:action.payload}

        case "reset":
            
            return {...state, name:"",location:[]}    
            
        default:
            return state;
    }
   
}

const startRecording= dispatch=>()=>{
    dispatch({type:"recording", payload:true})
};
const stopRecording= dispatch=>()=>{
    dispatch({type:"recording", payload:false})
};

const addLocation= dispatch=>(recording,location)=>{
    
    
    dispatch({type:"add_location", payload:location})
    if(recording){
        dispatch({type:"record_location", payload: location})
    } 
};

const changeName = dispatch=>(name)=>{
    dispatch ({type:"change_name", payload:name})
}

const reset =dispatch=>()=>{
    dispatch({type:"reset"});
}


export const {Context, Provider}= createDataContext(
    locationReducer,
    {startRecording,stopRecording,addLocation,changeName,reset},
    {recording:false, location:[],currentLocation:null, name:""}
)