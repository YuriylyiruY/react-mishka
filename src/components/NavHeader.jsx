import React from "react";
import { Link } from "react-router-dom";
import { NavSvg } from "./navSvg";
import { NavButton } from "./navButton";

const NavHeader = () => {
  const navPartLeft = [
    {
      id: 1,
      title: "Каталог товаров",
      className: "navShareProperties navMediumPart navCatalogOfProducts    navHiddenClass",
      classInsideContent: "navCatalogOfProductsInsideContent",
      page: "/catalog",
    },
    {
      id: 2,
      title: "Вязание на заказ",
      className: "navShareProperties navMediumPart navCustomKnitting  navHiddenClass",
      classInsideContent: "navCustomKnittingInsideContent",
      page: "/form",
    },
    {
      id: 3,
      title: "Новые поступления",
   
      className: "navShareProperties  navDesktopPart navNewAcquisitions  navHiddenClassDesktop",
      classInsideContent: "navNewAcquisitionsInsideContent",
      page: "/reducer",
    },
    {
      id: 4,
      title: "Распродажа",
      className: "navShareProperties navDesktopPart navSale  navHiddenClassDesktop",
      classInsideContent: "navSaleInsideContent",
      page: "",
    },
  ];
  const navPartRight = [
    {
      id: 5,
      title: "Поиск по сайту",
      className: "navShareProperties navMediumPart navSearch navHiddenClass",
      classInsideContent: "navSearchInsideContent",
    },
    {
      id: 6,
      title: "Корзина: пока пуста",
      className: "navShareProperties navMediumPart navCart navHiddenClass",
      classInsideContent: "navCartInsideContent",
    },
    {
      id: 7,
      title: "Бесплатная доставка по России",
      className: "navShareProperties  navMobilePart navFreeShipping navHiddenClass",
      classInsideContent: "navFreeShippingInsideContent",
    },
  ];

  return (
    <div className="nav">
      <div className="navPartLeft">
        <div className="navMishka">
          <Link to="/" className="navHeaderMishka">
            <NavSvg />
          </Link>
          <NavButton />
        </div>

        {navPartLeft.map((part) => (
          <Link to={part.page} className={part.className} key={part.id}>
            <div className={part.classInsideContent}>{part.title}</div>
          </Link>
        ))}
      </div>
      <div className="navPartRight">
        {navPartRight.map((part) => (
          <div className={part.className} key={part.id}>
            <div className={part.classInsideContent}>{part.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default NavHeader;
