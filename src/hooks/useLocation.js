import  {useState,useEffect} from "react";
import { Accuracy, 
    requestForegroundPermissionsAsync, 
    watchPositionAsync 
} from "expo-location";


export default (isTracking ,callback)=>{
    const [err, setErr] = useState(null)
    const [subscriber, setSubscriber]= useState(null)

    
    
    useEffect(() => {
        let subscriber= null;
        const startWatching= async()=>{
            try {
                const {granted}=await requestForegroundPermissionsAsync();
                const sub = await watchPositionAsync({
                    accuracy:Accuracy.BestForNavigation,
                    timeInterval:1000,
                    distanceInterval:10
                }, location=>{
                        callback(location);
                });
                subscriber= sub;
                if(!granted){
                    throw new Error("Location permission not granted");
                }
            } catch (error) {
                setErr(error)
                
            }
        }


       if (isTracking) {
            startWatching()    
       } else {
            if(subscriber){
                subscriber.remove();
            } 
           subscriber= null
       }
       return()=>{
          if(subscriber){
            subscriber.remove();
          } 
       }
        
    }, [isTracking, callback])

   return [err]
}

