import { Iphone15Pro } from "../iphone";
import styles from "./styles.module.scss";

export default function PhoneSection(props) {
  if (props.left) {
    return (
      <div className={styles.container}>
        <div className={styles.phoneContainerRight}>
          <Iphone15Pro src={props.src!}></Iphone15Pro>
        </div>
        <div className={styles.contentRight} data-scroll data-scroll-speed=".2">
          <div className={styles.contentPrev}>
            Everywhere <br></br>you want!
          </div>
          <div className={styles.contentNext}>
            We made it versatile and able<br></br>to work in salty water, too.{" "}
            <br></br>The only limit is your fantasy!
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.container}>
        <div className={styles.content} data-scroll data-scroll-speed=".2">
          <div className={styles.contentPrev}>Easy-to-Read</div>
          <div className={styles.contentNext}>
            Smart algorithms that simplify<br></br> your life by making simple
            graphs <br></br>and charts.
          </div>
        </div>
        <div className={styles.phoneContainer}>
          <Iphone15Pro src={props.src!}></Iphone15Pro>
        </div>
      </div>
    );
  }
}
