import styles from "./style.module.scss";
import AboutLeft from "./about-left";
import AboutRight from "./about-right";

export default function About() {
  return (
    <div className={styles.about}>
                <div className={styles.aboutLeft} 
        data-scroll 
        data-scroll-sticky>
          <AboutLeft></AboutLeft>
        </div>
      <div className={styles.aboutRight}
     >
        <AboutRight></AboutRight>
        

      </div>
    </div>
  );
}
