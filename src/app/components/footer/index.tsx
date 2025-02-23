import styles from "./styles.module.scss";
import FooterCol1 from "./col/col-1";
import FooterCol2 from "./col/col-2";
import FooterCol3 from "./col/col-3";
import FooterCol4 from "./col/col-4";
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
          <div className={styles.footerNumber}>+(39) 045 7080131</div>
          <div className={styles.footerSubTitle}>
            This site is protected by reCAPTCHA and the Google Privacy Policy
            and Terms of Service apply.
          </div>
        </div>
        <div className={styles.footerRight}>
          <FooterCol1 />
          <FooterCol2 />
          <FooterCol3 />
          <FooterCol4 />
        </div>
      </div>
      <div className={styles.footerLower}>
        <div className={styles.footerLowerTitle}>
         <LogoMicollego />
        </div>
        © 2021 MICOLLEGO. All rights reserved.ù
      </div>
    </footer>
  );
}
