import React, { ReactNode } from "react";

import style from "./menuPanel.module.scss";

type MenuPanel = {
  children: ReactNode;
  className?: string;
};

export default function MenuPanel({ children }: MenuPanel) {
  return <div className={style.menuPanel}>{children}</div>;
}
