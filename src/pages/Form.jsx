import React from "react";
import NavHeader from "../components/NavHeader";
import { AppContext } from "../App";

export const Form = () => {
  React.useContext(AppContext);
  return (
    <div className="App">
      <div>Form</div>
      <NavHeader />
    </div>
  );
};
