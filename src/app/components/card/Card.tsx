import { ReactNode } from "react";
import style from "./Card.module.scss";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
    <div className={`${style.card} ${className || ""}`.trim()}>{children}</div>
  );
}
