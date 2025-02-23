import styles from "./style.module.scss";

export default function Article(props) {

    const logos = {
        "arena": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/L%27Arena_logo.svg/2560px-L%27Arena_logo.svg.png",
        "gazzetta": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Gazzetta_dello_Sport.svg/2560px-Gazzetta_dello_Sport.svg.png",
        "corriere": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Corriere_della_Sera.svg/2560px-Corriere_della_Sera.svg.png"
    }

    const image = logos[props.journal];

    return (
        <div className={styles.article}>
            <img className={styles.articleJournal} src={image}></img>
            <div className={styles.articleTitle}>{props.title}</div>
        </div>
    );  
}