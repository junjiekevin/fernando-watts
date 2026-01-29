import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <div>
            <SEO
                title="Home"
                description="The official website of Fernando Watts, a professional classical bass singer. Explore upcoming performances, recordings, and biography."
            />
            <section className="hero">
                <div className="hero-backdrop"></div>
                <div className="container hero-content page-fade-in">
                    <p className="hero-subtitle">CLASSICAL SINGER | BASS</p>
                    <h1 className="hero-title">FERNANDO <br /> <span className="accent">WATTS</span></h1>
                    <div className="hero-cta">
                        <Link to="/schedule" className="btn btn-primary">Upcoming Performances</Link>
                        <Link to="/recordings" className="btn btn-outline">Listen & Watch</Link>
                    </div>
                </div>
                <div className="scroll-indicator">
                    <span>SCROLL</span>
                    <div className="scroll-line"></div>
                </div>
            </section>

            <section className="highlights section reveal">
                <div className="container">
                    <h2 className="section-title text-center">Recent Highlights</h2>
                    <div className="highlights-grid mt-lg">
                        <div className="highlight-card reveal">
                            <div className="card-placeholder" style={{ background: 'url(/images/scala-placeholder.png) center/cover' }}></div>
                            <h3>Debut at La Scala</h3>
                            <p>Performing the role of Sarastro in Mozart's Die Zauberflöte.</p>
                        </div>
                        <div className="highlight-card reveal">
                            <div className="card-placeholder" style={{ background: 'url(/images/berlin-phil-placeholder.png) center/cover' }}></div>
                            <h3>Berlin Philharmonic</h3>
                            <p>Soloist in Verdi's Messa da Requiem under the baton of...</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
