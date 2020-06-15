import {DATA_START,DATA_SUCCESS,DATA_FAIL} from '../actions/index'  


const intialState={  //sets initial state of app
    fetching:false,
    artists:[],
    error:null
}

export const rootReducer = (state=initialSate,action) =>{
    switch(action.type){

        case DATA_START:
            return{
                ...state,
                fetching:true,
                error:null
            }

        case DATA_SUCCESS:
            return{
                ...state,

                artists:[...state.artists,...action.paylod],
                fetching:false
            }
    }
}

export default rootReducer;