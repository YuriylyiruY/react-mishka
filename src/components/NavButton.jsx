import React, { useState } from "react";

export const NavButton = () => {
  const [state, setState] = useState(false);
  const navOpenList = () => {
    const navMenuOpen = document.querySelector(".navSandvichButton");
    const NavMenuClose = document.querySelector(".navCloseButton");
    const color1 = document.querySelectorAll(".color1");
    const color2 = document.querySelectorAll(".color2");

    setState((state) => {
      return !state;
    });
    console.log(state);

    if (state === false) {
      NavMenuClose.classList.remove("navHiddenClass");
      navMenuOpen.classList.add("navHiddenClass");
      color1.forEach((item)=>item.classList.remove("navHiddenClass"));
      color2.forEach((item)=>item.classList.remove("navHiddenClass"));
      
    } else if (state === true) {
      NavMenuClose.classList.add("navHiddenClass");
      navMenuOpen.classList.remove("navHiddenClass");
      color1.forEach((item)=>item.classList.add("navHiddenClass"));
      color2.forEach((item)=>item.classList.add("navHiddenClass"));
    }
  };
  return (
    <div>
      <svg
        className="navSandvichButton"
        width="20"
        height="14"
        viewBox="0 0 20 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={navOpenList}
      >
        <path d="M20 0H0V2H20V0Z" fill="#231F20" />
        <path d="M20 6H0V8H20V6Z" fill="#231F20" />
        <path d="M20 12H0V14H20V12Z" fill="#231F20" />
      </svg>

      <svg
        className="navCloseButton navHiddenClass"
        width="21"
        height="20"
        viewBox="0 0 21 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={navOpenList}
      >
        <path
          d="M21 1.36585L19.5659 0L10.5512 8.58537L1.43415 0L0 1.36585L9.01463 10.0488L0 18.6341L1.43415 20L10.5512 11.4146L19.5659 20L21 18.6341L11.9854 10.0488L21 1.36585Z"
          fill="black"
        />
      </svg>
    </div>
  );
};
