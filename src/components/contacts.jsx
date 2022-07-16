import React from "react";
import Iframe from "react-iframe";
import "../style/contacts.scss";

export const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts_zigzagWrap">
        <div className="contacts_zigzag"></div>
      </div>
      
        <div className="contacts_titleWrap">
          <div className="contacts_title">Контакты</div>
        </div>
        <div className="contacts_emailAdressWrap">
        <div className="contacts_emailWrap">
          <div className="contacts_emailTitle">e-mail:</div>{" "}
          <div className="contacts_email">info@mimimishkashop.ru</div>
        </div>
        <div className="contacts_adressWrap">
          <div className="contacts_adressTitle">адрес:</div>
          <div className="contacts_adress">
            г. Санкт-Петербург <br className="contacts_adressBr"/>ул. Большая Конюшенная<br className="contacts_adressBr"/> д. 19/8, офис 101
          </div>
        </div>
        </div>
        <div className="contacts_mapMobile">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.6036253056395!2d30.32085335124177!3d59.938719168965754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1657965857882!5m2!1sru!2sru"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
        </div>
        <div className="contacts_mapMedium">
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3997.290494985053!2d30.3195775994667!3d59.938028557473174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1657969264414!5m2!1sru!2sru"
            width="100%"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></Iframe>
        </div>
        <div className="contacts_buttonWrap">
          <button className="contacts_button">Напиши нам</button>
        </div>
     
    </div>
  );
};
