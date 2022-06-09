import React from "react";
import NavHeader from "../components/NavHeader";
import { AppContext } from "../App";

export const Catalog = () => {
  React.useContext(AppContext);
  
  
  return (
    <div className="App" >
      <div>Cataloooooooooooooog</div>
      <NavHeader/>
    </div>
  );
};
