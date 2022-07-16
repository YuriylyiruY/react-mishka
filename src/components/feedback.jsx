import React from "react";
import "../style/feedback.scss";

import { SimpleSlider } from "../components/slider";

export const Feedback = () => {
  return (
    <div className="feedback">
      <div className="feedback_img">
        <h1 className="sliderTitle">Отзывы</h1>
        <SimpleSlider />
        <div className="sliderButtonWrap">
          <button className="sliderButton">Написать</button>
        </div>
      </div>
    </div>
  );
};
