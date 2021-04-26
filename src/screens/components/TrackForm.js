import React, {useContext} from 'react';
import { Input, Button} from 'react-native-elements' ;
import Spacer from './Spacer';
import {Context as LocationContext} from '../../context/LocationContext';
import useSaveTrack from '../../hooks/useSaveTrack'

const TrackForm =() =>{

  const {state:{name,recording,location},
     startRecording,
     stopRecording,
     changeName} = useContext(LocationContext)  

  const [saveTrack] = useSaveTrack();  

  return(
      <>
      <Spacer>
        <Input value={name} onChangeText={changeName} placeholder="Enter a Track Name"/>
      </Spacer>
      <Spacer>
      {recording?
        <Button  title ="Stop" onPress={stopRecording}/>:
        <Button title ="Start Recording" onPress={startRecording}/>
      }
      </Spacer>
      <Spacer>
      {(!recording && location.length)?
        <Button  title="Save" onPress={saveTrack}/>:
        null
      }       
      </Spacer> 
      </>
  )


}


export default TrackForm