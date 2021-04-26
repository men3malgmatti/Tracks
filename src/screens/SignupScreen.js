import React, {useContext, useEffect} from "react"
import {StyleSheet,View} from "react-native"
import Spacer from "./components/Spacer"
import {Context as AuthContext} from "../context/AuthContext"
import AuthForm from "./components/AuthForm"
import NavLink from "./components/NavLink"
import { NavigationEvents } from "react-navigation"


const SignupScreen =()=>{
   
    const {state,signup, clearErrorMessage,autoSignin} = useContext(AuthContext)
     
    useEffect(() => {
        autoSignin()
    }, [])

    return (
        <View style={styles.container}>
            <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm
                headerText={"Sign Up for Tracker"}
                buttonText={"Sign Up"}
                onSubmit={signup}
                errorMessage={state.errorMessage}
            />
            <Spacer>
               <NavLink route={"Signin"} linkText={"Already have an account, Sign in instead"}/>
            </Spacer>
        </View>
        
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        marginBottom:150
    }
})

SignupScreen.navigationOptions=()=>{
    return {
        headerShown:false
    }
}


export default SignupScreen