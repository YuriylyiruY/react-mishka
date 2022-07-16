const initinalState =[
  {complete:true,id:1},
  {complete:true,id:2},
  {complete:true,id:3}
]

const ItemOfWeekModalReducer = (state=initinalState, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
         
          return { ...todo, complete: !todo.complete ,log:console.log(todo.complete)} ;
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
  
};

export default ItemOfWeekModalReducer;
