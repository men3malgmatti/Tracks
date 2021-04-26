import React, { useContext } from "react"
import {StyleSheet, View} from "react-native"
import AuthForm from "./components/AuthForm"
import NavLink from "./components/NavLink"
import Spacer from "./components/Spacer"
import {Context as AuthContext} from "../context/AuthContext"
import { NavigationEvents } from "react-navigation"

const SigninScreen =()=>{

    const {state,signin,clearErrorMessage} = useContext(AuthContext)

    return (
        <View style={styles.container}>
          <NavigationEvents onWillFocus={clearErrorMessage}/>
            <AuthForm
                headerText={"Sign In for Tracker"}
                buttonText={"Sign In"}
                onSubmit={signin}
                errorMessage={state.errorMessage}
            />
            <Spacer>
               <NavLink route={"Signup"} linkText={"Don't have an account, Sign up instead"}/>
            </Spacer>
        </View>
        
    );
}

SigninScreen.navigationOptions=()=>{

    return{  
         headerShown:false
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        marginBottom:150
    }
})

export default SigninScreen