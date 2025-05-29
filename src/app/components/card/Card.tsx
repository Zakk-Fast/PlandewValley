import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

import style from "./Card.module.scss";

export default function Card({ children }: CardProps) {
  return <div className={style.card}>{children}</div>;
}
