import styles from "./style.module.scss";

interface ArticleProps {
    journal: "arena" | "gazzetta" | "corriere";
    href: string;
    title: string;
}

export default function Article(props: ArticleProps) {
    const logos: Record<ArticleProps["journal"], string> = {
        "arena": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/L%27Arena_logo.svg/2560px-L%27Arena_logo.svg.png",
        "gazzetta": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Gazzetta_dello_Sport.svg/2560px-Gazzetta_dello_Sport.svg.png",
        "corriere": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Corriere_della_Sera.svg/2560px-Corriere_della_Sera.svg.png"
    };

    const image = logos[props.journal]; // Now TypeScript knows props.journal is a valid key

    return (
        <div className={styles.article}>
            <img className={styles.articleJournal} src={image} alt="Journal Logo" />
            <a href={props.href} className={styles.articleTitle}>{props.title}</a>
        </div>
    );
}