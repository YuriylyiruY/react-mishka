


const initialState = {
    csh :100000000,
    
 }




 const cashReducer =(state = initialState, action) => {
  switch (action.type) {

  case "ADD_MONEY":
   console.log(state);
    return { ...state, csh: state.csh + action.payload}

    case "GET_MONEY":
    return { ...state, csh: state.csh - action.payload}

  default:
    return state
  }
  

}
export default cashReducer;