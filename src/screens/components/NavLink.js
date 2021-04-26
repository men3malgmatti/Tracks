import React from "react"
import {withNavigation} from "react-navigation"
import {StyleSheet,TouchableOpacity} from "react-native"
import {Text} from "react-native-elements"

const NavLink = ({navigation, route, linkText})=>{

    return(
        <TouchableOpacity onPress={()=>{navigation.navigate(route)}}>
            <Text style={styles.link}>{linkText}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    link:{
        color:"blue",
        fontSize:18
    }
});

export default withNavigation(NavLink);

