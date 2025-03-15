import Item from "../item";
import style from "./style.module.scss";

export default function FooterCol1() {
  return (
    <div className={style.col}>
      <div className={style.footerTitle}>
        SOCIALS <br></br>
      </div>
      <Item href="https://www.instagram.com/micollego/" title="Instagram" />
      <Item href="https://www.facebook.com/micollegoteam" title="FaceBook" />
      <Item href="https://www.youtube.com/@micollego" title="Youtube" />
    </div>
  );
}
