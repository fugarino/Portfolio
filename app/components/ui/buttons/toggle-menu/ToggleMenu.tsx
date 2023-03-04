import styles from "./ToggleMenu.module.css";

interface IToggleMenuProps {
  isMenuOpen: boolean;
  handleMenuClick: () => void;
}

const ToggleMenu = ({ isMenuOpen, handleMenuClick }: IToggleMenuProps) => {
  return (
    <button
      aria-label="open menu"
      className={`z-20 w-[33px] h-[43px]
       before:bg-blue-dark after:bg-blue-dark dark:before:bg-white dark:after:bg-white
      ${isMenuOpen && "translate-y-[4px] sm:translate-y-[8px]"} ${
        styles.menuBtn
      } ${isMenuOpen && styles.open}`}
      onClick={handleMenuClick}
    ></button>
  );
};

export default ToggleMenu;
