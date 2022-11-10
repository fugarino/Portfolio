import styles from "./MenuListButton.module.css";

interface IMenuListButton {
  text: string;
  isMenuOpen: boolean;
}

const MenuListButton = ({ text, isMenuOpen }: IMenuListButton) => {
  return (
    <li className={`${isMenuOpen ? styles.btnVisible : styles.btnHidden}`}>
      <button className={styles.btn}>{text}</button>
    </li>
  );
};

export default MenuListButton;
