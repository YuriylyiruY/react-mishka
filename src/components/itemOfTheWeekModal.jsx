import React, { useState } from "react";

import "../style/itemOfTheWeekModal.scss";

const ItemOfTheWeekModal = (props) => {
  //console.log(props.state);

  const ItemOfTheWeekOpenModal = document.querySelector(
    ".itemOfTheWeek_ModalWrap"
  );
  if (props.state === true) {
    ItemOfTheWeekOpenModal.classList.remove("itemOfTheWeek_ModalWrapNone");
  }
  const [selected, setSelected] = useState("option_S");

  const btnS = document.querySelector(".itemOfTheWeek_RadioBtnLabelS");
  const btnM = document.querySelector(".itemOfTheWeek_RadioBtnLabelM");
  const btnL = document.querySelector(".itemOfTheWeek_RadioBtnLabelL");
  const handleChange = (event) => {
    console.log(event.target.checked);

    if (event.target.value === "M") {
      btnS.classList.remove("itemOfTheWeek_RadioBtnLChecked");
      btnL.classList.remove("itemOfTheWeek_RadioBtnLChecked");
      btnM.classList.add("itemOfTheWeek_RadioBtnLChecked");
    }
    if (event.target.value === "S") {
      btnM.classList.remove("itemOfTheWeek_RadioBtnLChecked");
      btnL.classList.remove("itemOfTheWeek_RadioBtnLChecked");
      btnS.classList.add("itemOfTheWeek_RadioBtnLChecked");
    }
    if (event.target.value === "L") {
      btnS.classList.remove("itemOfTheWeek_RadioBtnLChecked");
      btnM.classList.remove("itemOfTheWeek_RadioBtnLChecked");
      btnL.classList.add("itemOfTheWeek_RadioBtnLChecked");
    }

    //NavMenuClose.classList.add("navHiddenClass");

    setSelected(event.target.value);
  };
  const ItemOfTheWeekModalClose = (e) => {
    e.preventDefault();

    ItemOfTheWeekOpenModal.classList.add("itemOfTheWeek_ModalWrapNone");
  };
  return (
    <div className="itemOfTheWeek_ModalWrap itemOfTheWeek_ModalWrapNone">
      <div className="itemOfTheWeek_Modal">
        <form className="itemOfTheWeek_ModalForm">
          <h1 className="itemOfTheWeek_ModalFormTitle">
            Добавить <br /> в корзину
          </h1>
          <p className="itemOfTheWeek_ModalFormParagraph">Выбери размер:</p>
          <div className="itemOfTheWeek_ModalFormRadio">
            <input
              className="itemOfTheWeek_RadioBtn itemOfTheWeek_RadioBtnS"
              type="radio"
              name="size"
              id="option_S"
              value="S"
              checked={selected === "option_S"}
              onChange={handleChange}
            />
            <label
              className="itemOfTheWeek_RadioBtnLabel itemOfTheWeek_RadioBtnLabelS"
              htmlFor="option_S"
            >
              S
            </label>
            <input
              className="itemOfTheWeek_RadioBtn itemOfTheWeek_RadioBtnM"
              type="radio"
              name="size"
              id="option_M"
              value="M"
              onChange={handleChange}
              checked={selected === "option_M"}
            />
            <label
              className="itemOfTheWeek_RadioBtnLabel itemOfTheWeek_RadioBtnLabelM"
              htmlFor="option_M"
            >
              M
            </label>
            <input
              className="itemOfTheWeek_RadioBtn itemOfTheWeek_RadioBtnL"
              type="radio"
              name="size"
              id="option_L"
              value="L"
              onChange={handleChange}
              checked={selected === "option_L"}
            />
            <label
              className=" itemOfTheWeek_RadioBtnLabel itemOfTheWeek_RadioBtnLabelL"
              htmlFor="option_L"
            >
              L
            </label>
          </div>
          <div className="itemOfTheWeek_RadioSubmitWrap">
            <input
              className="itemOfTheWeek_RadioSubmit"
              type="submit"
              value="заказать"
              onClick={ItemOfTheWeekModalClose}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemOfTheWeekModal;
