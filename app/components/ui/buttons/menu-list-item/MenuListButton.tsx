import Link from "next/link";
import styles from "./MenuListButton.module.css";

interface IMenuListButton {
  text?: string;
  isMenuOpen: boolean;
  href: string;
  alt?: boolean;
  line?: true;
  social?: true;
}

const MenuListButton = ({
  line,
  text,
  isMenuOpen,
  href,
  alt,
  social,
}: IMenuListButton) => {
  if (line) {
    return (
      <div
        className={`h-[1.5px] bg-black w-full ${
          isMenuOpen ? styles.btnVisible : styles.btnHidden
        }`}
      ></div>
    );
  }
  if (social) {
    return (
      <li
        className={`text-blue-dark dark:text-white ${
          isMenuOpen ? styles.btnVisible : styles.btnHidden
        }`}
      >
        <a
          target="_blank"
          rel="noreferrer"
          href={href}
          aria-label="social"
          className={styles.socials}
        >
          {text}
          {alt && <span className="text-sm font-bold ml-[2px]">©</span>}
        </a>
      </li>
    );
  }
  return (
    <li
      className={`text-blue-dark dark:text-white ${
        isMenuOpen ? styles.btnVisible : styles.btnHidden
      }`}
    >
      <Link href={href} className={styles.btn}>
        {text}
        {alt && <span className="text-sm font-bold ml-[2px]">©</span>}
      </Link>
    </li>
  );
};

export default MenuListButton;
