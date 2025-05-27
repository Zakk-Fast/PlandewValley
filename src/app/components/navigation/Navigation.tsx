"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./navigation.module.scss";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <button
        className={styles.nav__toggle}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul
        className={`${styles.nav__links} ${
          isOpen ? styles["nav__links--open"] : ""
        }`}
      >
        <li className={styles.nav__item}>
          <Link href="/planner" className={styles.nav__link}>
            Planner
          </Link>
        </li>
        <li className={styles.nav__item}>
          <Link href="/about" className={styles.nav__link}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
