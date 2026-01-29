import SEO from '../components/SEO';

const NEWS_ARTICLES = [
    {
        id: 1,
        title: '"Classical singers off to London"',
        date: 'April 11, 2025',
        source: 'Nation News',
        excerpt: 'Three talented Barbadian classical singers are about to get a boost in their quest for the world’s big opera stages through the efforts of British opera...',
        url: 'https://nationnews.com/2025/04/11/classical-singers-off-to-london/#',
        thumbnail: '/images/nation-news.png'
    }
];

const News = () => {
    return (
        <div className="news-page page-fade-in pt-navbar">
            <SEO
                title="News & Reviews"
                description="Stay updated with the latest news, press reviews, and performance announcements featuring Fernando Watts."
            />

            {/* Page Banner */}
            <div className="page-banner news-banner" style={{ backgroundImage: `url(/images/banner_news.jpeg)` }}></div>

            <section className="section">
                <div className="container">
                    <h1 className="section-title text-center reveal">News & Reviews</h1>
                    <div className="news-grid mt-lg">
                        {NEWS_ARTICLES.map((article) => (
                            <div key={article.id} className="news-card reveal">
                                <div className="news-image-wrapper">
                                    <img src={article.thumbnail} alt={article.title} className="news-thumbnail" />
                                </div>
                                <div className="news-card-content">
                                    <div className="news-date">{article.date}</div>
                                    <h3>{article.title}</h3>
                                    <p className="news-source">{article.source}</p>
                                    <p className="news-excerpt">{article.excerpt}</p>
                                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="read-more">Read more</a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
