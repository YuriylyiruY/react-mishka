import React from "react";
import NavHeader from "../components/navHeader";
import { AppContext } from "../app";

export const Catalog = () => {
  React.useContext(AppContext);

  return (
    <div className="app">
      <div>Catalog</div>
      <NavHeader />
    </div>
  );
};
