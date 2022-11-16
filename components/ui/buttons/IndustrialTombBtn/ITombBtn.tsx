import styles from "./ITombBtn.module.css";

interface ITombBtnProps {
  text: string;
  children: React.ReactNode;
}

const ITombBtn = ({ text, children }: ITombBtnProps) => {
  return (
    <button aria-label="btn" className={styles.btn}>
      <span className="hidden lg:flex">{text}</span>
      <div className="flex lg:hidden">{children}</div>
    </button>
  );
};

export default ITombBtn;
