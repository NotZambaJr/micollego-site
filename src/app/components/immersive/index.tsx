import styles from './page.module.css';


export default function Immersive() {
    return(
    <iframe className={styles.frame} width="1920px" height="1080px" src="./3d/index.html" style={{border: 'none'}}></iframe>
)}