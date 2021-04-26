import React,{useContext} from "react"
import {StyleSheet} from "react-native"
import {Button,Text} from "react-native-elements"
import {SafeAreaView} from "react-navigation"
import {Context as AuthContext} from "../context/AuthContext"
import Spacer from "./components/Spacer"
import { FontAwesome } from '@expo/vector-icons';

const AccountScreen =()=>{
    
    const {signout} = useContext(AuthContext)
    
    return (
        <SafeAreaView style={styles.container} forceInset={{top:"always"}}>
            <Text h3> Account</Text>
            <Spacer>
                <Button title="sign out"  onPress={signout}/>
            </Spacer> 
        </SafeAreaView>
    )
}

AccountScreen.navigationOptions=()=>{
    return {
        title:'Account',
        tabBarIcon: <FontAwesome name="gear" size={24} color="black" />
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        top:50,
        
    }
})

export default AccountScreen