"use client";

import useMenu from "../../../hooks/useMenu";
import MenuListButton from "../ui/buttons/menu-list-item/MenuListButton";
import ToggleMenu from "../ui/buttons/toggle-menu/ToggleMenu";

const Menu = () => {
  const { isMenuOpen, darkBtnText, handleMenuClick, handleDarkModeClick } =
    useMenu();

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
            ? "flex flex-col items-end justify-center h-[90vh] text-right -translate-x-[50px]"
            : "w-0 h-0 overflow-hidden"
        }`}
      >
        <MenuListButton
          text="About"
          isMenuOpen={isMenuOpen}
          onClick={handleMenuClick}
        />
        <MenuListButton
          text="Projects"
          isMenuOpen={isMenuOpen}
          onClick={handleMenuClick}
        />
        <MenuListButton
          text="Skills"
          isMenuOpen={isMenuOpen}
          onClick={handleMenuClick}
        />
        <MenuListButton
          text="Contact"
          isMenuOpen={isMenuOpen}
          onClick={handleMenuClick}
        />
        <MenuListButton
          text="Dark Mode"
          darkBtnText={darkBtnText}
          isMenuOpen={isMenuOpen}
          darkModeBtn={true}
          handleDarkModeClick={handleDarkModeClick}
        />
      </menu>
    </div>
  );
};

export default Menu;
