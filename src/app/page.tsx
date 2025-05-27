import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles["page__main"]}>
        <h1 className={styles["page__title"]}>Plandew Valley</h1>
        <p className={styles["page__subtitle"]}>
          An interactive crop planner and profitability tool for Stardew Valley.
        </p>
        <a className={styles["page__cta"]} href="/planner">
          Start Planning
        </a>
      </main>
    </div>
  );
}
