import React  from "react"
import {StyleSheet,View} from "react-native"

const Spacer = ({children})=>{
    return(
        <View style={styles.spacing}>
         {children}
        </View>
    )
}

const styles= StyleSheet.create({
    spacing: {
        margin:20
    }
})

export default Spacer