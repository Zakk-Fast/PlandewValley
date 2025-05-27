"use client";
import Image from "next/image";
import Link from "next/link";
import Navigation from "../navigation/Navigation";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <Link href="/" className={styles.header__logo}>
          <Image
            src="/image/plandewlogo.png"
            alt="Plandew Valley Logo"
            height={80}
            width={80}
            style={{ width: "auto", height: "45px", display: "block" }}
            unoptimized
          />
        </Link>
        <Navigation />
      </div>
    </header>
  );
}
