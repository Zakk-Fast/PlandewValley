"use client";

import Link from "next/link";
import Navigation from "../navigation/Navigation";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/" className={styles.header__logo}>
          Plandew Valley
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
