import styles from "./styles.module.scss";
export default function prjLanding() {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.top}>
          <div className={styles.icon}></div>
          <div className={styles.title}>Subbot</div>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.textPrev}> Searching has never been easier</div>
        <div className={styles.textNext}>
          Micollego helps you find alien spiecies instantly. Perfect for quick
          sessions and also helping community.
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
}
