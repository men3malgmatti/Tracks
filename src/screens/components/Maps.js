import React, {useContext} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native' ;
import MapView, { Polyline,Circle } from 'react-native-maps'
import {Context as LocationContext} from '../../context/LocationContext'


const Maps = () =>  {
  
    const {state:{currentLocation, location}} = useContext(LocationContext)

    if(! currentLocation){
        return <ActivityIndicator size="large" style={{top:200}}></ActivityIndicator>
    } 
   
    return(
        <View>
           
            <MapView style={styles.map}
               initialRegion={{
                ...currentLocation.coords,   
                longitudeDelta:1,
                latitudeDelta:1
               }} 
               region={{
                ...currentLocation.coords,   
                longitudeDelta:0.01,
                latitudeDelta:0.01   
               }} 
            >
            <Circle
                radius={30}
                center={{...currentLocation.coords}}
                fillColor="rgba(100,160,160,0.5)"
                strokeColor="rgba(100,160,160,1)"
            />  
            <Polyline 
                coordinates={location.map((loc)=>loc.coords)}
                
            />
            </MapView>
        </View>
    )
}

const styles= StyleSheet.create({

    map:{
        marginTop:20,
        height:300
    }


});

export default Maps;