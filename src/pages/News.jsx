import newsBanner from '../assets/images/banner_news.jpg';
import SEO from '../components/SEO';

const News = () => {
    return (
        <div className="page-fade-in pt-navbar">
            <SEO
                title="News & Reviews"
                description="The latest news, press releases, and critical reviews for Fernando Watts, professional classical bass."
            />
            <div className="page-banner" style={{ backgroundImage: `url(${newsBanner})` }}></div>
            <section className="section">
                <div className="container">
                    <h1 className="section-title text-center reveal">News & Reviews</h1>
                    <div className="news-grid mt-lg">
                        <div className="news-card reveal">
                            <div className="news-date">January 20, 2026</div>
                            <h3>"A Voice of Generational Power"</h3>
                            <p className="news-source">Opera News</p>
                            <p className="news-excerpt">Fernando Watts' debut in the role of King Philip II was nothing short of extraordinary...</p>
                            <a href="#" className="read-more">Read Full Review</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default News;
