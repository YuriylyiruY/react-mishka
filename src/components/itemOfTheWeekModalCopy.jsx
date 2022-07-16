import React from "react";

import "../style/itemOfTheWeekModal.scss";
import { useDispatch, useSelector } from "react-redux";

const ItemOfTheWeekModalCopy = () => {
  

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id,log:console.log(todo.id) });
   
    
  };
  const dispatch = useDispatch();
  const complete1 = useSelector((state) => state.modalev[0].complete);
  const complete2 = useSelector((state) => state.modalev[1].complete);
  const complete3 = useSelector((state) => state.modalev[2].complete);
  
  console.log(complete1);
  console.log(complete2);
  console.log(complete3);

  const initialTodos = [
    {
      className: "itemOfTheWeek_RadioBtn itemOfTheWeek_RadioBtnS",
      type: "radio",
      name: "size",
      id: 1,
      value: "S",
      complete: complete1,
      classNameLabel:
        "itemOfTheWeek_RadioBtnLabel itemOfTheWeek_RadioBtnLabelS",
      title: "S",
    },
    {
      className: "itemOfTheWeek_RadioBtn itemOfTheWeek_RadioBtnM",
      type: "radio",
      name: "size",
      id: 2,
      value: "M",
      complete: complete2,
      classNameLabel:
        "itemOfTheWeek_RadioBtnLabel itemOfTheWeek_RadioBtnLabelM",
      title: "M",
    },
    {
      className: "itemOfTheWeek_RadioBtn itemOfTheWeek_RadioBtnL",
      type: "radio",
      name: "size",
      id: 3,
      value: "L",
      complete: complete3,
      classNameLabel:
        "itemOfTheWeek_RadioBtnLabel itemOfTheWeek_RadioBtnLabelL",
      title: "L",
    },
  ];
  // console.log(initialTodos[0].complete+initialTodos[0].id)
  // console.log(initialTodos[1].complete+initialTodos[1].id)
  // console.log(initialTodos[2].complete+initialTodos[2].id)

  
  return (
    <div className="itemOfTheWeek_ModalWrap ">
      <div className="itemOfTheWeek_Modal">
        <form className="itemOfTheWeek_ModalForm">
          <h1 className="itemOfTheWeek_ModalFormTitle">
            Добавить <br /> в корзину
          </h1>
          <p className="itemOfTheWeek_ModalFormParagraph">Выбери размер:</p>
          <div className="itemOfTheWeek_ModalFormRadio">
            {initialTodos.map((todo) => (
              <div key={todo.id}>
                <input
                  
                  className={todo.className}
                  type={todo.type}
                  name={todo.name}
                  id={todo.id}
                  value={todo.value}
                  checked={todo.complete}
                  onChange={() => handleComplete(todo)}
                />

                <label className={todo.classNameLabel} htmlFor={todo.id} >
                  {todo.title} 
                </label>
              </div>
            ))}
          </div>

          <div className="itemOfTheWeek_RadioSubmitWrap">
            <input
              className="itemOfTheWeek_RadioSubmit"
              type="submit"
              value="заказать"
              
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ItemOfTheWeekModalCopy;
