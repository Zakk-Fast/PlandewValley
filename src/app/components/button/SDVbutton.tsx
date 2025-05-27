// components/SDVButton.tsx
import styles from "./sdvbutton.module.scss";

type SDVButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function SDVButton({
  children,
  onClick,
  type = "button",
}: SDVButtonProps) {
  return (
    <button className={styles.sdvButton} onClick={onClick} type={type}>
      {children}
    </button>
  );
}
