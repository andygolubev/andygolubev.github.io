import ArticleItem from '@/components/ArticleItem/ArticleItem';
import { articles } from '@/data/articles';
import styles from './page.module.css';

export default function Page() {
    return (
        <main className={styles.articlesPage}>
            <h1 className={styles.articlesTitle}>Articles</h1>
            <div className={styles.articlesContainer}>
                {articles.map((article) => (
                    <ArticleItem key={article.id} {...article} />
                ))}
            </div>
        </main>
    )
}