"use client"

import { useEffect, useState } from 'react';
import styles from "./page.module.css";
import dynamic from 'next/dynamic';
import { notFound } from 'next/navigation';
import { use } from 'react';
import { articles } from '@/data/articles';

export default function Page({ params }: { params: { slug: string } | Promise<{ slug: string }> }) {
    // Properly unwrap params with React.use() to fix the warning
    const unwrappedParams = params instanceof Promise ? use(params) : params;
    const slug = unwrappedParams.slug;

    const [ArticleContent, setArticleContent] = useState<React.ComponentType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // First validate if the slug exists in our articles data
        const articleExists = articles.some(article => article.slug === slug);

        if (!articleExists) {
            // If article doesn't exist, trigger not found
            notFound();
            return;
        }

        const loadArticle = async () => {
            try {
                // Dynamic import of the MDX file based on slug
                const Article = dynamic(() => import(`@/../public/articles/${slug}/index.mdx`), {
                    loading: () => <div>Loading article...</div>,
                    ssr: false,
                });
                setArticleContent(() => Article);
            } catch (e) {
                console.error("Failed to load article:", e);
                notFound();
            } finally {
                setLoading(false);
            }
        };

        loadArticle();
    }, [slug]);

    // Show loading state while checking if article exists
    if (loading && !ArticleContent) {
        return <div className={styles.articleContainer}>Loading article...</div>;
    }

    return (
        <div className={styles.articleContainer}>
            {ArticleContent ? <ArticleContent /> : notFound()}
        </div>
    );
}