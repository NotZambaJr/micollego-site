import Item from "../item";
import style from "./style.module.scss";

export default function FooterCol2() {
  return (
    <div className={style.col}>
      <div className={style.footerTitle}>
        CONTACT US <br></br>
      </div>
      <Item href="https://istitutobosco.edu.it/" title="Istituto Comprensivo" />
      <Item href="https://maps.app.goo.gl/gbLm9xur6UxrVdU39" title="Location" />
      <Item href="/privacy" title="Privacy Policy" />
    </div>
  );
}
