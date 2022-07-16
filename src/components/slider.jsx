import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../style/sliderIndexPage.scss";

const sliderInfo = [
  {
    id: 1,
    sliderContent: `Я молодая мама, но всё равно 
фотографии не набирали и близко 
такого количества лайков, как
у популярных инстамамочек.
В отчаянии, я накупила 
аксессуаров и игрушек в Мишке,
и мои фотографии сразу стали
более стильными, а также 
набирают больше лайков!`,

    sliderName: `Анастасия Красильникова`,
    sliderEmail: `@misssssiskras`,
    classNameSliderEmail: `sliderEmail`,
  },
  {
    id: 2,
    sliderContent: ` Я молодая мама, но всё равно 
    фотографии не набирали и близко 
    такого количества лайков, как
    у популярных инстамамочек.
    фотографии не набирали и близко 
    такого количества лайков, как
    у популярных инстамамочек.
    фотографии не набирали и близко 
    такого количества лайков, как
    у популярных инстамамочек.
    фотографии не набирали и близко 
    такого количества лайков, как
    у популярных инстамамочек.
    фотографии не набирали и близко 
    такого количества лайков, как
    у популярных инстамамочек.
    фотографии не набирали и близко 
    такого количества лайков, как
    у популярных инстамамочек.
    фотографии не набирали и близко 
    такого количества лайков, как
    у популярных инстамамочек.
    В отчаянии, я накупила `,
    sliderName: "ghbdtnnnnn",
    sliderEmail: "brieflyAboutUs@jjjj.jjj",
    classNameSliderEmail: `sliderEmail`,
  },
  {
    id: 3,
    sliderContent: ` Я молодая мама, но всё равно 
    фотографии не набирали и близко 
    такого количества fesfffffffffdsfd jjjjjjjjjjjjjjjjjjjjjjjjлайков, как
    у популярных инстамамочек.
    В отчаянии, я накупила `,
    sliderName: "ghbdtnnnnn",
    sliderEmail: "brieflyAboutUs@jjjj.jjj",
    classNameSliderEmail: `sliderEmail`,
  },
  {
    id: 4,
    sliderContent: ` Я молодИЙ faser, но всё равно 
    фотографии не набирали и близко 
    такого количества лайков, как
    у популярных инстапамочек.
    В отчаянии, я накупил `,
    sliderName: "ghbdtnnnnn",
    sliderEmail: "brieflyAboutUs@jjjj.jjj",
    classNameSliderEmail: `sliderEmail`,
  },
  {
    id: 5,
    sliderContent: "Экологически",
    sliderName: "чистые материалы",
    sliderEmail: "brieflyAboutUsLeftBlock",
    classNameSliderEmail: `sliderEmail`,
  },
  {
    id: 6,
    sliderContent: "Коротокое сообщение",
    sliderName: "ч",
    sliderEmail: "brieflyAboutUsLeftBlock@прпрпрпрпfffffffffffffff",
    classNameSliderEmail: `sliderEmail`,
  },
];

function SampleNextArrow(props) {
  const { className, onClick } = props;
  console.log(className);
  return <div className={className} onClick={onClick} />;
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

export class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      prevArrow: <SamplePrevArrow />,
      nextArrow: <SampleNextArrow />,
    };
    return (
      
       
        <Slider {...settings}>
           
          {sliderInfo.map((slider) => (
            <div key={slider.id} className="slider">
              <div className="slider-content">{slider.sliderContent}</div>
              <div className="sliderName">{slider.sliderName}</div>
              <div className={slider.classNameSliderEmail}>
                {slider.sliderEmail}
              </div>
            </div>

          ))}
         
        </Slider>

       
      
    );
  }
}
