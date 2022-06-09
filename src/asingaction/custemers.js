import { addCustomers } from "../store/customerReducer"


export const fetchClient =()=>{

    return function(dispatch){
        fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => dispatch(addCustomers(json)))
    }
}