export const reducer = (state,action) => {
    switch (action.type){
      case "START":
        return {
          ...state,
          fetching:true,
          error:null
        };
  
        case "SUCCESS":
          return {
            ...state,
            fetching:false,
            artists:action.payload
          };
  
        case "FAIL":
          return {
            ...state,
            fetching:false,
            errorMessage:action.error
          };
        
        default:
            return state;
    }
  }