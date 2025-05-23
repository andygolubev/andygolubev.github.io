import styles from "./Articles.module.css";
import { articles } from "@/data/articles";
import ArticleItem from "@/components/ArticleItem/ArticleItem";

export default function Articles() {
    return <section className={styles.articlesSection}>
        {articles.map((article) => (
            <ArticleItem key={article.id} {...article} />
        ))}
        <div className={styles.articlesTitleContainer}>
            <h2 className={styles.articlesTitle}>Latest Articles</h2>
            <p>I regularly share my hands-on experience through technical articles on Dev.to, focusing on cloud-native solutions, infrastructure as code, and automation.</p>
        </div>
    </section>;
}