import { Article } from "@/types/articles";
import styles from "./ArticleItem.module.css";
import Link from "next/link";

export default function ArticleItem(article: Article) {
    return <Link href={`/articles/${article.slug}`} target="_blank" className={styles.articleItem}>
        <h3 className={styles.articleItemTitle}>{article.title}</h3>
        <div className={styles.articleItemButtonContainer}>
            <p className={styles.articleItemLink}>Read more {"->"}</p>
            <div className={styles.articleItemBlank}></div>
        </div>
    </Link>;
}