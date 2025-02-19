import style from "./style.module.scss";
import Shortcuts from "../shortcuts";

export default function LandingTitle() {
  return (
    <div className={style.title}>
      <div className={style.upper}>
        HELLO
        <div className={style.upperPost}>WE ARE</div>
      </div>
      <div className={style.lower}>MICOLLEGO

      <main className={style.main}>
        <Shortcuts />
      </main>
    </div>
    </div>
  );
}
