import React from "react";
import { Link } from "react-router-dom";
import { NavSvg } from "./NavSvg";
import { NavButton } from "./NavButton";

const NavHeader = () => {
  const navPart1 = [
    {
      id: 1,
      title: "Каталог товаров",
      className: "color1 navHiddenClass",
      page: "/catalog",
    },
    {
      id: 2,
      title: "Вязание на заказ",
      className: "color1 navHiddenClass",
      page: "/form",
    },
    {
      id: 3,
      title: "Новые поступления",
      className: "color1 navDesktopPart navHiddenClassDesktop",
      page: "",
    },
    {
      id: 4,
      title: "Распродажа",
      className: "color1 navDesktopPart navHiddenClassDesktop",
      page: "",
    },
  ];
  const navPart2 = [
    { id: 1, title: "Поиск по сайту", className: "color2 navSearch navHiddenClass" },
    { id: 2, title: "Корзина: пока пуста", className: "color2 navCart navHiddenClass" },
    {
      id: 3,
      title: "Бесплатная доставка по России",
      className: "color2 navMobilePart navHiddenClass",
    },
  ];

  return (
    <div className="Nav">
      <div className="NavPart1">
        <div className="NavMishka">
          <Link to="/" className="HeaderMishka">
            <NavSvg />
          </Link>
          <NavButton />
        </div>

        {navPart1.map((part) => (
          <Link to={part.page} className={part.className} key={part.id}>
            {part.title}
          </Link>
        ))}
      </div>
      <div className="NavPart2">
        {navPart2.map((part) => (
          <div className={part.className}>{part.title}</div>
        ))}
      </div>
    </div>
  );
};
export default NavHeader;
