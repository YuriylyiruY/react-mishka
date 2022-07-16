import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const CashReducerRender = () => {
  const dispatch = useDispatch();
  const money = useSelector((state) => state.cash.csh);
  console.log(money);

  const addMoney = () => {
    dispatch({ type: "ADD_MONEY", payload: 30 });
  };
  const delMoney = () => {
    dispatch({ type: "GET_MONEY", payload: 30 });
  };
  return (
    <div className="app">
      <div>{money}</div>
      <button onClick={addMoney}>BUTTON</button>
      <button onClick={delMoney}>BUTTON_</button>
    </div>
  );
};
