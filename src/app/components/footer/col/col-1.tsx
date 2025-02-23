import Item from "../item";
import style from "./style.module.scss";

export default function FooterCol1() {
  return (
    <div className={style.col}>
      <div className={style.footerTitle}>
        CONTENT <br></br>
      </div>
      <Item href="/about" title="Products" />
      <Item href="/contact" title="Market" />
      <Item href="/contact" title="Brands" />
      <Item href="/contact" title="Projects" />
      <Item href="/contact" title="Sustainability" />
    </div>
  );
}
