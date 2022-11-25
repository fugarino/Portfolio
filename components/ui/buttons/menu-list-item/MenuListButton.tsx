import styles from "./MenuListButton.module.css";

interface IMenuListButton {
  text: string;
  isMenuOpen: boolean;
  darkModeBtn?: boolean;
  darkBtnText?: string;
  handleDarkModeClick?: () => void;
}

const MenuListButton = ({
  text,
  isMenuOpen,
  darkModeBtn,
  darkBtnText,
  handleDarkModeClick,
}: IMenuListButton) => {
  if (darkModeBtn) {
    return (
      <li
        className={`text-[#3a3847] dark:text-white ${
          isMenuOpen ? styles.btnVisible : styles.btnHidden
        }`}
      >
        <button className={styles.btn} onClick={handleDarkModeClick}>
          {darkBtnText === "light" ? "DarkMode" : "Light Mode"}
        </button>
      </li>
    );
  }

  return (
    <li
      className={`text-[#3a3847] dark:text-white ${
        isMenuOpen ? styles.btnVisible : styles.btnHidden
      }`}
    >
      <button className={styles.btn}>{text}</button>
    </li>
  );
};

export default MenuListButton;
