import styles from "./page.module.css";

export default function Page({ params }: { params: { slug: string } }) {
    return (
        <div className={styles.articleContainer}>
            <h1 className={styles.articleTitle}>Article {params.slug}</h1>
        </div>
    )
  }