import axios from 'axios' 

export const DATA_START = 'DATA_START'
export const DATA_SUCCESS = 'DATA_SUCCESS'
export const DATA_FAIL = 'DATA_FAIL'


export const getData=()=>dispatch=>{
    dispatchEvent({type:DATA_START})  //initializes data request
    axios.get('http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=26a8672124e09449ce7d98a21024bb9a&format=json')
    .then(res=>{
        dispatchEvent({
            type:DATA_SUCCESS,
            payload:res.data,  //retrieval successful
        })
    })

    .catch(err=>{
        dispatchEvent({
            type:DATA_FAIL,
            payload:err   //retrieval failed
        })
    })
}