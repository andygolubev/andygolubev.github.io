// This is needed for dynamic routes
// function generateStaticParams() {
//     // return [
//     //     { slug: 'article-1' },
//     //     { slug: 'article-2' },
//     //     { slug: 'article-3' },
//     // ]
// }
export default function Page({ params }: { params: { slug: string } }) {
    return (
        <h1 className="accent-font">Article {params.slug}</h1>
    )
  }