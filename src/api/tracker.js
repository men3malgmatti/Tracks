import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

const instance = axios.create({
    baseURL:"http://cfc0c163be72.ngrok.io"
});

instance.interceptors.request.use(
    async (config)=>{
        const token= await AsyncStorage.getItem('token');
        if (token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    },
    (err)=>{
        return Promise.reject(err)
    }

)


export default instance;