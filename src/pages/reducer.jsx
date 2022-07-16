import React from "react";
import NavHeader from "../components/navHeader";
import {CashReducerRender} from "../components/cashReducerRender";
import ItemOfTheWeekModalCopy from "../components/itemOfTheWeekModalCopy";


export const Reducer = () => {
  
  return (
    <div className="app">
      <NavHeader />
     <CashReducerRender/>
     <ItemOfTheWeekModalCopy/>
    </div>
  );
  
};
