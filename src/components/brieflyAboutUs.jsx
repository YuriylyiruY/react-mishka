import React from "react";
import  "../style/brieflyAboutUs.scss";


export const BrieflyAboutUs = () => {
 
  const brieflyAboutUsLeftBlock = [
    {
      id: 1,
      benefitsLeft: "Экологически",
      benefitsRight: "чистые материалы",
      classNames: "brieflyAboutUsLeftBlock brieflyAboutUsLeftBlock_svg1",
    },
    {
      id: 2,
      benefitsLeft: "Скандинавский стиль",
      benefitsRight: "по Российской цене",
      classNames: "brieflyAboutUsLeftBlock brieflyAboutUsLeftBlock_svg2",
    },
    {
      id: 3,
      benefitsLeft: "Увеличивает лайки",
      benefitsRight: "на фотографиях",
      classNames: "brieflyAboutUsLeftBlock brieflyAboutUsLeftBlock_svg3",
    },
  ];
  const brieflyAboutUsRightBlock = [
    {
      id: 4,
      benefitsLeft: "Связано вручную",
      benefitsRight: "с любовью и  умилением",
      classNames: "brieflyAboutUsRightBlock brieflyAboutUsRightBlock_svg4",
    },
    {
      id: 5,
      benefitsLeft: "Поддержка отечественного",
      benefitsRight: "производителя",
      classNames: "brieflyAboutUsRightBlock brieflyAboutUsRightBlock_svg5",
    },
    {
      id: 6,
      benefitsLeft: "Поставляется" ,
      benefitsRight:"в подарочной упаковке",
      classNames: "brieflyAboutUsRightBlock brieflyAboutUsRightBlock_svg6",
    },
  ];
  return (
    <div className="brieflyAboutUs">
     <div className="brieflyAboutUs_titleWrap"> <h1 className="brieflyAboutUs_title">Коротко о нас:</h1></div>
      <div className="brieflyAboutUs_wrap">
        <div className="brieflyAboutUsLeftBlock_wrap">
          {brieflyAboutUsLeftBlock.map((part) => (
            <div key={part.id} className={part.classNames}>
              {part.benefitsLeft}
              <br />
              {part.benefitsRight}
            </div>
          ))}
        </div>
        <div className="brieflyAboutUsRightBlock_wrap">
          {brieflyAboutUsRightBlock.map((part) => (
            <div key={part.id} className={part.classNames}>
              {part.benefitsLeft}
              <br />
              {part.benefitsRight}
            </div>
          ))}
        </div>
      </div>
    
    </div>
  );
};
