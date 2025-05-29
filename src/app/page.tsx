import Image from "next/image";

import styles from "./page.module.scss";
import Link from "next/link";
import Button from "./components/button/Button";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles["page__main"]}>
        <Image
          src="/image/plandewlogo.png"
          alt="Plandew Valley Logo"
          height={200}
          width={200}
          style={{ width: "auto", height: "200px", display: "block" }}
          unoptimized
        />

        <p className={styles["page__subtitle"]}>
          An interactive crop planner and profitability tool for Stardew Valley.
        </p>
        <Button>
          <Link className={styles["page__cta"]} href="/planner">
            Start Planning
          </Link>
        </Button>
      </main>
    </div>
  );
}
