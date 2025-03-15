import React from "react";
import styles from "./style.module.scss";

export default function AboutRight() {
  return (
    <div className={styles.aboutRight} data-scroll data-scroll-speed=".01">
      <section className={styles.aboutSection}>
        <div className={styles.aboutRightTitle}>Inclusivity
          <div className={styles.aboutRightText}>
          An inclusive robotics team values diversity, ensuring all members—regardless of background or ability—feel respected and heard. <br></br>Diverse perspectives drive creativity and innovation.
          </div>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.aboutRightTitle}>Friendship
          <div className={styles.aboutRightText}>
          Trust, support, and shared passion fuel their collaboration, turning challenges into victories and making every creation a symbol of teamwork and camaraderie.
          </div>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.aboutRightTitle}>Ideas
          <div className={styles.aboutRightText}>
          In a robotic team, ideas thrive on collaboration and diverse perspectives.<br></br> Each thought builds on another, turning creativity into innovation and shared success.
          </div>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.aboutRightTitle}>Creativity
          <div className={styles.aboutRightText}>
          Creativity drives innovation in a robotic team, blending diverse skills and fresh perspectives. <br></br>It turns challenges into opportunities and ideas into groundbreaking solutions.
          </div>
        </div>
      </section>
      <section className={styles.aboutSection}>
        <div className={styles.aboutRightTitle}>Respect
          <div className={styles.aboutRightText}>
          Respect fosters trust and collaboration in a robotic team. <br></br>It values every idea, strengthens teamwork, and creates an environment where everyone can contribute and grow
          </div>
        </div>
      </section>
    </div>
  );
}
