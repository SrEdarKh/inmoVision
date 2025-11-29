
import axios from "axios";

const BASE_URL = 'http://127.0.0.1:8000/api/'
const time = 1000

function interceptor(){
    const instance = axios.create({
        baseURL: BASE_URL,
        timeout: time
    });

    instance.interceptors.request.use(function(request){
        return request;
    }, function(error){
        if(error.request && error.request.status === 401){
            window.location.href = '/'//Usar navegate 
        }
        return Promise.reject(error)
    });

    return instance;
}


interceptor();








