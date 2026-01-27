import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
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
            </section>

            <div className="page-fade-in">
                <section className="highlights section">
                    <div className="container">
                        <h2 className="section-title text-center">Recent Highlights</h2>
                        <div className="highlights-grid mt-lg">
                            <div className="highlight-card">
                                <div className="card-placeholder"></div>
                                <h3>Debut at La Scala</h3>
                                <p>Performing the role of Sarastro in Mozart's Die Zauberflöte.</p>
                            </div>
                            <div className="highlight-card">
                                <div className="card-placeholder"></div>
                                <h3>Berlin Philharmonic</h3>
                                <p>Soloist in Verdi's Messa da Requiem under the baton of...</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;
