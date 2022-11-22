import styles from "./ToggleMenu.module.css";

interface IToggleMenuProps {
  isMenuOpen: boolean;
  handleMenuClick: () => void;
}

const ToggleMenu = ({ isMenuOpen, handleMenuClick }: IToggleMenuProps) => {
  return (
    <button
      className={`w-[33px] h-[43px]
       before:bg-[#3a3847] after:bg-[#3a3847] dark:before:bg-white dark:after:bg-white
      ${isMenuOpen && "translate-y-[4px]"} ${styles.menuBtn} ${
        isMenuOpen && styles.open
      }`}
      onClick={handleMenuClick}
    ></button>
  );
};

export default ToggleMenu;
