import React, {useState} from "react";
import "../style/itemOfTheWeek.scss";
import ItemOfTheWeekModal from "./itemOfTheWeekModal";



const ItemOfTheWeek = () => {
 
 
   const [state, setState] = useState(false);
  
  
  const ItemOfTheWeekModalOpen = () => {
    
     
     
    setState((state) => {
       return !state
      });
    console.log(state);
  };

  return (
    <div className="itemOfTheWeek">
      <div className="itemOfTheWeek_img">
        <div className="itemOfTheWeek_content">
          <h1 className="itemOfTheWeek_title">Вязаные корзинки</h1>
          <div className="itemOfTheWeek_logo">
            Товар <br className="itemOfTheWeek_logoBr" />
            недели
          </div>
          <div className="itemOfTheWeek_tableWrap">
            <div className="itemOfTheWeek_describtion">
              Экологически чистая пряжа,
              <br className="itemOfTheWeek_describtionBrFirst" />
              ручная работа. Доступны в шести{" "}
              <br className="itemOfTheWeek_describtionBr" />
              расцветках, и трех размерах.
            </div>

            <div className="itemOfTheWeek_table">
              <p className="itemOfTheWeek_tableName">Цвет:</p>
              <p className="itemOfTheWeek_tableParametr">«Тиффани»/серый</p>
            </div>
            <div className="itemOfTheWeek_table">
              <p className="itemOfTheWeek_tableName">Диаметр:</p>
              <p className="itemOfTheWeek_tableParametr">25 см</p>
            </div>
            <div className="itemOfTheWeek_table">
              <p className="itemOfTheWeek_tableName">Высота:</p>
              <p className="itemOfTheWeek_tableParametr">15 см</p>
            </div>

            <div className="itemOfTheWeek_price">Цена: 990 руб.</div>
            <div className="itemOfTheWeek_priceWrapBtn">
              <button
                className="itemOfTheWeek_orderBtn"
                onClick={ItemOfTheWeekModalOpen}
              >
                Заказать
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="itemOfTheWeek_zigzagWrap">
        <div className="itemOfTheWeek_zigzag"></div>
      </div>
      <ItemOfTheWeekModal state={state} />
    </div>
  );
};

export default ItemOfTheWeek;
