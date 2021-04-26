import '../_mockLocation'
import React, {useContext,useCallback } from "react"
import {StyleSheet,View} from "react-native"
import {Text} from 'react-native-elements'
import {withNavigationFocus} from 'react-navigation'
import Maps from "./components/Maps"
import {Context as LocationContext} from '../context/LocationContext'
import useLocation from "../hooks/useLocation"
import TrackForm from './components/TrackForm'
import { FontAwesome } from '@expo/vector-icons';

const TrackCreateScreen =({isFocused})=>{
    
    const {state:{recording},addLocation} = useContext(LocationContext)
    const callback= useCallback(
        (location) => {
            addLocation(recording,location)
        },
        [recording],
    )
    const [err] = useLocation(isFocused || recording ,callback) 
    
   

    return (
        <View style={styles.container}>
            <Text h3 >Create a new Track</Text>
            <Maps/>
            {err ? <Text>{"Please enable location services"}</Text>:null}
            <TrackForm/>
        </View>
    )
}

TrackCreateScreen.navigationOptions=()=>{
    return {
        title:'New Track',
        tabBarIcon: <FontAwesome name="plus" size={24} color="black" />
    }
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        top:50,
        
    }
})

export default withNavigationFocus(TrackCreateScreen)