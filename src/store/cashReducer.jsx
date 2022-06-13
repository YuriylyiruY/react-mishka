

const initialState = {
    cash :100000000,
 }

 export const cashReducer =(state = initialState, { type, payload,gop }) => {
  switch (type) {

  case "ADD_MONEY":
    return { ...state, cash: state.cash + payload + gop  }

    case "GET_MONEY":
    return { ...state, cash: state.cash - payload + gop}

  default:
    return state
  }
}