import React from "react";
import { Link } from "react-router-dom";
import { NavSvg } from "./NavSvg";

const NavHeader = () => {
  const navPart1 = [
    { id: 1, title: "Каталог товаров", className: "color1",page: "/catalog" },
    { id: 2, title: "Вязание на заказ", className: "color1",page: "/form" },
    { id: 3, title: "Каталог товаров", className: "color1 navDesktopPart",page: "" },
    { id: 4, title: "Каталог товаров", className: "color1 navDesktopPart",page: "" },
  ];
  const navPart2 = [
    { id: 1, title: "Каталог товаров", className: "color2" },
    { id: 2, title: "Каталог товаров", className: "color2" },
    { id: 3, title: "Каталог товаров", className: "color2" },
  ];

  return (
    <div className="Nav">
      <div className="NavPart1">
        <div className="NavMishka">
        <Link to="/" className="HeaderMishka">
            <NavSvg/>
         
           </Link>
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
