"use client";

import { useEffect, useState } from "react";
import MenuListButton from "../ui/buttons/menu-list-item/MenuListButton";
import ToggleMenu from "../ui/buttons/toggle-menu/ToggleMenu";

const Menu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleEscPress = ({ key }: any) => {
      if (key === "Escape" && isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscPress);
    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  }, [isMenuOpen]);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`z-20 flex flex-col items-end ${
        isMenuOpen &&
        "fixed top-0 h-screen w-full max-w-[1400px] pr-[1rem] sm:pr-[1.7rem] -translate-x-[1rem] sm:-translate-x-[1.69rem] bg-white dark:bg-dark transition-[background-color] duration-150 ease-in"
      }`}
    >
      <ToggleMenu isMenuOpen={isMenuOpen} handleMenuClick={handleMenuClick} />
      <menu
        className={`${
          isMenuOpen
            ? "flex flex-col items-end justify-center h-[80vh] sm:h-[85vh] text-right -translate-x-[50px]"
            : "w-0 h-0 overflow-hidden"
        }`}
      >
        <MenuListButton
          text="aiirlabs"
          isMenuOpen={isMenuOpen}
          href="/aiirlabs"
          alt={true}
        />
        <MenuListButton
          text="ITomb js"
          isMenuOpen={isMenuOpen}
          href="/industrialtomb"
        />
        <MenuListButton
          text="pikachu"
          isMenuOpen={isMenuOpen}
          href="/pikachu"
        />
        <MenuListButton isMenuOpen={isMenuOpen} href="/pikachu" line={true} />
        <MenuListButton
          text="linkedin"
          isMenuOpen={isMenuOpen}
          href="https://www.linkedin.com/in/christianfugarino/"
          social={true}
        />
        <MenuListButton
          text="github"
          isMenuOpen={isMenuOpen}
          href="https://github.com/fugarino"
          social={true}
        />
      </menu>
    </div>
  );
};

export default Menu;
