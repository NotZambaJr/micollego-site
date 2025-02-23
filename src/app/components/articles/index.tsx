import Article from "./article";
import styles from "./style.module.scss";
import React from "react";
import { MegaPhone } from "./megaphone";

export default function Articles() {
  return (
    <div>
      <div className={styles.title}>Read all about it</div>
      <div className={styles.containerArticles}>
        <div className={styles.articles}>
          <Article
            journal="arena"
            title="I Ragazzi di «MyCollego» superano il test e volano in finale nazionale"
          />
          <Article
            journal="arena"
            title="I Ragazzi di «MyCollego» superano il test e volano in finale nazionale"
          />
        </div>

        <div className={styles.megaphoneCanvas}>
          <MegaPhone />
        </div>
      </div>
    </div>
  );
}
