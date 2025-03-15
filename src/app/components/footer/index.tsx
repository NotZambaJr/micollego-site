import styles from "./styles.module.scss";
import FooterCol1 from "./col/col-1";
import FooterCol2 from "./col/col-2";
import LogoMicollego from "./logo";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerUpper}>
        <div className={styles.footerLeft}>
          <div className={styles.footerTitle}>
            See how we can help you. <br></br>
            Get in touch today.
          </div>
          <div className={styles.footerNumber}>45.592749 N, 11.070099 E</div>
          <div className={styles.footerSubTitle}>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </div>
        </div>
        <div className={styles.footerRight}>
          <FooterCol1 />
          <FooterCol2 />
        </div>
      </div>
      <div className={styles.footerLower}>
        <div className={styles.footerLowerTitle}>
         <LogoMicollego />
        </div>
        </div>
    </footer>
  );
}
