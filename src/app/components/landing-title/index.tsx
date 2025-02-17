import style from "./style.module.scss";
import GsapMagnetic from "./script/gsap";

export default function LandingTitle() {
  return (
    <div className={style.title}>
      <div className={style.upper}>
        HELLO
        <div className={style.upperPost}>WE ARE</div>
      </div>
      <div className={style.lower}>MICOLLEGO

      <main className={style.main}>
        <div className={style.container}>
          <GsapMagnetic>
            <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 31.5 58"
            >
              <path d="m20.72,22.16c2.77,0,5.55.02,8.32.03.4,0,.8.02,1.2.03.07.06.14.13.21.19-.28,1.58-.56,3.16-.83,4.75-.32,1.87-.64,3.74-.99,5.76-1.37.13-2.76-.07-4.14-.04-1.36.03-2.72,0-4.2,0-.13,8.38.12,16.72.11,25.11h-11.17v-24.91H0v-10.81h9.16c.04-.39.11-.71.11-1.02-.01-1.58-.05-3.17-.06-4.75-.01-1.62-.16-3.26.02-4.85.19-1.69.64-3.35,1.52-4.86,1.36-2.33,3.28-4.06,5.58-5.4,1.39-.81,2.94-1.25,4.52-1.3C24.28-.03,27.71.02,31.15,0c.07,0,.13.05.35.14.04,3.3-.29,6.66-.18,10.11-1.13,0-2.15.03-3.17,0-1.57-.07-3.15-.06-4.65.46-1.42.49-2.46,1.4-2.89,2.95-.3,1.08-.36,2.16-.34,3.25.04,1.69.13,3.38.2,5.07.08.06.16.13.24.19Z" />
            </svg>
          </GsapMagnetic>

          <GsapMagnetic>
            <svg
              id="Layer_2"
              data-name="Layer 2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 51.1 36.69"
            >
              <path d="m26.22,36.56c-4.74,0-9.49,0-14.23,0-3.93,0-7.19-1.49-9.63-4.58-1.02-1.29-1.66-2.82-2.03-4.45-.28-1.25-.28-2.52-.29-3.78C.03,19.98,0,16.21,0,12.44c0-1.06,0-2.13.18-3.17.2-1.09.59-2.15,1.16-3.13C2.75,3.73,4.77,1.97,7.28.79c.85-.4,1.78-.61,2.74-.63,2.02-.04,4.04-.21,6.06-.14,7.73.27,15.47.02,23.2.14,1.97.03,3.89.43,5.62,1.33,2.23,1.16,3.98,2.81,4.91,5.25.52,1.36.76,2.72.93,4.16.56,4.65.3,9.32.27,13.98-.02,2.7-.92,5.16-2.63,7.27-1.73,2.15-3.95,3.62-6.68,4.08-1.8.31-3.64.39-5.47.43-3.34.06-6.68.02-10.02.02,0-.04,0-.07,0-.11Zm7.94-18.51c-4.62-2.62-9.12-5.17-13.62-7.71-.12-.07-.29-.07-.4-.1v16.33c4.78-2.84,9.41-5.56,14.03-8.52Z" />
            </svg>
          </GsapMagnetic>
        </div>
        we craft powerful digital experiences that <br></br>connect brands with
        their audience.<br></br>
        Our creative approach to design and development <br></br>is what sets us
        apart from the rest.
      </main>
    </div>
    </div>
  );
}
