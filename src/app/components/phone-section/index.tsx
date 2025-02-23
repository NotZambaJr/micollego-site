import { Iphone15Pro } from "../iphone";
import styles from "./styles.module.scss";

export default function PhoneSection(props) {
  
  if (props.left){
    return (
        <div className={styles.container}>
          <div className={styles.phoneContainer}>
            <Iphone15Pro src={props.src!}></Iphone15Pro>
          </div>
          <div
            className={styles.content}
            data-scroll
            data-scroll-speed=".2"
          >
            <div className={styles.contentPrev}>AI Power Scheduling</div>
            <div className={styles.contentNext}>
              Intelligent scheduling that learns <br></br> your preferences and
              optimizes<br></br> your time.
            </div>
          </div>
        </div>
  );
}else{
        return (
            <div className={styles.container}>
              <div
                className={styles.content}
                data-scroll
                data-scroll-speed=".2"
              >
                <div className={styles.contentPrev}>AI Power Scheduling</div>
                <div className={styles.contentNext}>
                  Intelligent scheduling that learns <br></br> your preferences and
                  optimizes<br></br> your time.
                </div>
              </div>
              <div className={styles.phoneContainer}>
                <Iphone15Pro src={props.src!}></Iphone15Pro>
              </div>
            </div>
      );
}
}
