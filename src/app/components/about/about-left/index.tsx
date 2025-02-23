import Badge from "./badge/index";
import styles from "./style.module.scss";

export default function AboutLeft() {
  return (
    <div className={styles.aboutRight}>
      <div className={styles.aboutRightTitle}>
        <h1>Who <br></br>We Are</h1>
      </div>
      <div className={styles.aboutRightContent}>
        <div className={styles.badge}>
          <Badge></Badge>
        </div>
      </div>
    </div>
  );
}
