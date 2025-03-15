import styles from "./styles.module.scss";
export default function prjLanding() {
  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.top}>
          <div className={styles.icon}>
            <svg
              viewBox="20 -15 180 250"
            >
              <defs></defs>
              <path
                className={styles.path}
                d="M73.23.16c4.19.72,5.31,3.98,6.11,7.68l.48.24h98.03c3.77.29,6.05,2.56,6.35,6.34v47.49c.11,2.81-2.76,6.35-5.64,6.35h-81.6l8.37,29.09c45.25,19.47,60.37,76.77,29.59,115.95C93.18,266.41,8.05,241.31.62,175.06l-.48-5.87c.05-1.67-.08-3.37,0-5.04,1.06-23.59,12.64-45.43,31.94-59.03,1.28-.91,6.2-3.68,6.69-4.57,9.65-32.47,18.59-65.2,28.55-97.55.9-1.46,2.78-2.61,4.47-2.84h1.44Z"
              />
            </svg>
          </div>
          
          <div className={styles.title}>SubBot</div>
        </div>
      </div>
      <div className={styles.lower}>
        <div className={styles.textPrev}> Searching has never been so easy</div>
        <div className={styles.textNext}>
          Perfect for quick sessions and effortlessly supporting the community!
        </div>
      </div>
      <div className={styles.bottom}></div>
    </div>
  );
}
