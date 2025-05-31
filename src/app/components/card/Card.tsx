// components/card/Card.tsx
import { forwardRef } from "react";
import styles from "./Card.module.scss";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Card = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref) => (
    <div ref={ref} className={`${styles.card} ${className || ""}`}>
      {children}
    </div>
  )
);

Card.displayName = "Card";

export default Card;
