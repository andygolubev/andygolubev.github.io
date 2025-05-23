export interface Article {
    id: string;
    slug: string;
    title: string;
}

export interface Articles {
    articles: Article[];
}