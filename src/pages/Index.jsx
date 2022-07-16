import React from "react";
import NavHeader from "../components/navHeader";
import { AppContext } from "../app";
import { Hero } from "../components/hero";
import ItemOfTheWeek from "../components/itemOfTheWeek";
import {BrieflyAboutUs} from "../components/brieflyAboutUs";
import { Feedback } from "../components/feedback";
import { Contacts } from "../components/contacts";
import { Footer } from "../components/footer";

  
export const Index = () => {
  React.useContext(AppContext);

  return (
    <div className="app">
      <NavHeader />
      <Hero />
      <ItemOfTheWeek />
      <BrieflyAboutUs/>
      <Feedback/>
      <Contacts/>
      <Footer/>
      <div className="zov"></div>
    </div>
  );
};
