import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Stardew Valley and all related content are © of ConcernedApe. This site
        is a fan-made project and is not affiliated with or endorsed by
        ConcernedApe or the Stardew Valley Wiki. All trademarks and copyrights
        belong to their respective owners.
      </p>
      <p>
        Built by{" "}
        <a
          href="https://github.com/Zakk-Fast"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zakk Fast
        </a>{" "}
        out of love for the Stardew Valley community. This project is purely for
        fun and to support fellow farmers.
      </p>
    </footer>
  );
}
