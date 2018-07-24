import axios from 'axios';
import {URL} from './session';

//SCE Managers = Encargados
export function getSCEManagers() {
    return (dispatch) => {
        //Begin Request
        dispatch({type: 'REQUEST_ANSWER'});
        return axios
            .get(`${URL}/SCEPersonaEncargada/Index`, {
                headers: {
                    'Accept':'application/json',
                    'Content-Type':'application/json',
                }
            })  
            .then((response)=>{
                dispatch({type:'GET_SCE_MANAGERS', data:response.data, loading:false});
                return response.data
            }).catch(error => {
                //Error Request
                if (error.response){
                    let newError = error.response ? error.response.data : 'Something went wrong, please try again.' 
                    dispatch({type:'SCE_MANAGERS_ERROR', error:newError});
                } 
            });
    };
}