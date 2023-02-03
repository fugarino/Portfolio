"use client";

import { useScroll } from "../../../../../contexts/ScrollContext";
import styles from "./MenuListButton.module.css";

interface IMenuListButton {
  text: string;
  isMenuOpen: boolean;
  darkModeBtn?: boolean;
  darkBtnText?: string;
  onClick?: () => void;
  handleDarkModeClick?: () => void;
}

const MenuListButton = ({
  text,
  isMenuOpen,
  darkModeBtn,
  darkBtnText,
  onClick,
  handleDarkModeClick,
}: IMenuListButton) => {
  const { setScrollTo }: any = useScroll();

  if (darkModeBtn) {
    return (
      <li
        className={`text-blue-dark dark:text-white ${
          isMenuOpen ? styles.btnVisible : styles.btnHidden
        }`}
      >
        <button className={styles.btn} onClick={handleDarkModeClick}>
          {darkBtnText}
        </button>
      </li>
    );
  }

  const handleClick = () => {
    if (onClick) onClick();
    setScrollTo(text);
  };

  return (
    <li
      className={`text-blue-dark dark:text-white ${
        isMenuOpen ? styles.btnVisible : styles.btnHidden
      }`}
      onClick={handleClick}
    >
      <button className={styles.btn}>{text}</button>
    </li>
  );
};

export default MenuListButton;
