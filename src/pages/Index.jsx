import React from "react";
import NavHeader from "../components/NavHeader";
import { AppContext } from "../App";
import "../style/Hero.scss";

export const Index = () => {
  React.useContext(AppContext);
  return (
    <div className="App">
      <NavHeader />
      <div className="hero">
        <div className="hero_text">
          <div className="hero_img">
            <p className="hero_title">Милые штуки ручной <br /> работы для дома</p>
          </div>
        </div>
      </div>
    </div>
  );
};
