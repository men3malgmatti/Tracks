import React,{useState} from "react"
import {StyleSheet} from "react-native"
import {Text,Button,Input} from "react-native-elements"
import Spacer from "./Spacer"

const AuthForm = ({headerText, buttonText, onSubmit,errorMessage})=>{

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    return(
        <>
            <Spacer>
                <Text h3> {headerText}</Text>
            </Spacer>
            <Spacer/>
            <Input label="Email" 
                autoCapitalize="none"
                autoCorrect={false}
                value={email} 
                onChangeText={(newEmail)=>{setEmail(newEmail)}}/>
            <Spacer/>
            <Input label="Password"
                secureTextEntry
                autoCapitalize="none"
                autoCorrect={false}
                value={password} 
                onChangeText={(newPassword)=>{setPassword(newPassword)}}/>

            {errorMessage? <Text style={styles.errorMessage}>{errorMessage}</Text>:null}
            
            <Spacer>
                <Button title={buttonText} onPress={()=>onSubmit({email,password})}/>
            </Spacer>
        </>
    )
}

const styles= StyleSheet.create({
    errorMessage:{
        margin:15,
        color:"red"
    }
})

export default AuthForm;
