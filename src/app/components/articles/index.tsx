import Article from "./article";
import styles from "./style.module.scss";
import React from "react";
import { MegaPhone } from "./megaphone";

export default function Articles() {
  return (
    <div>
      <div className={styles.title}>Read all about us</div>
      <div className={styles.containerArticles}>
        <div className={styles.articles}>
          <Article
            journal="arena"
            title="I Ragazzi di «MyCollego» superano il test e volano in finale nazionale"
            href="https://www.larena.it/territorio-veronese/lessinia/i-ragazzi-di-mycollego-vanno-in-finale-nazionale-1.9879679"
          />
          <Article
            journal="arena"
            title="I Ragazzi delle medie della Lessinia volano ai mondiali di robotica grazie a un'idea «illuminante»"
            href="https://www.larena.it/territorio-veronese/lessinia/le-medie-dritte-ai-mondiali-di-robotica-a-marrakech-1.9950019"
          />
        </div>

        <div className={styles.megaphoneCanvas}>
          <MegaPhone />
        </div>
      </div>
    </div>
  );
}
