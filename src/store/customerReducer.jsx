const initialState = {
  custome: []
};
const ADD_CUSTOMERS ="ADD_CUSTOMERS";

export const customerReducer = (state = initialState, { type, payload }) => {
  
  switch (type) {
    case ADD_CUSTOMERS:
      return { ...state, custome: [...state.custome, ...payload] };
    case "ADD_CUSTOMER":
      console.log(...state.custome);
      
      return { ...state, custome: [...state.custome, payload] };

    case "DEL_CUSTOMER":
      return {
        ...state,
        custome: state.custome.filter((custom) => custom !== payload)
      };

    default:
      return state;
      
  }

 
};
export const addCustomers=(payload)=>({type:ADD_CUSTOMERS,payload});
