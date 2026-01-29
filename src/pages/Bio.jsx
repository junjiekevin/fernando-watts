import React from 'react';
import SEO from '../components/SEO';

const Bio = () => {
    return (
        <div className="bio-backdrop-page">
            <SEO
                title="Biography"
                description="The journey of Fernando Watts, from the shores of Barbados to the operatic stages of Europe."
            />

            {/* Fixed Backdrop Image */}
            <div
                className="bio-fixed-backdrop"
                style={{ backgroundImage: `url(/images/profile-4.JPG)` }}
            >
                <div className="backdrop-overlay"></div>
            </div>

            {/* Scrolling Content */}
            <div className="bio-scroll-wrapper">
                <div className="container">

                    {/* Hero Header */}
                    <div className="bio-header-section text-center reveal">
                        <h1 className="bio-name">Fernando Watts</h1>
                    </div>

                    <div className="bio-staggered-grid">

                        {/* 1. Intro - Full Width Span */}
                        <div className="bio-grid-item full-width reveal">
                            <div className="bio-module intro">
                                <p className="lead-text">
                                    From the vibrant coastlines of Bridgetown, Barbados, to the grand opera houses of Europe, Fernando Watts’ journey is one of resilience, passion, and artistic excellence.
                                </p>
                            </div>
                        </div>

                        {/* 2. Image: Roots (Left) */}
                        <div className="bio-grid-item reveal">
                            <div className="bio-image-module">
                                <img src="/images/profile-2.JPG" alt="Fernando Watts Roots" className="bio-inline-image" />
                            </div>
                        </div>

                        {/* 3. Text: Roots (Right - Staggered) */}
                        <div className="bio-grid-item staggered-down reveal">
                            <div className="bio-module">
                                <span className="bio-section-label">Roots in Barbados</span>
                                <h2 className="bio-section-title">Beyond the Shore</h2>
                                <div className="bio-body-text">
                                    <p>
                                        Born and raised in Bridgetown, Barbados, Fernando’s early life was harmonized by the melodies of his local school choir. It was here, amidst the rhythmic pulse of the Caribbean, that his deep, resonant bass voice first found its home.
                                    </p>
                                    <p>
                                        Educated at The St. Leonards Boys School, his talent was recognized by mentors who encouraged him to seek a stage as vast as the ocean that surrounded him.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 4. Text: Mastery (Left - Staggered) */}
                        <div className="bio-grid-item staggered-up reveal">
                            <div className="bio-module">
                                <span className="bio-section-label">Artistic Mastery</span>
                                <h2 className="bio-section-title">A Global Stage</h2>
                                <div className="bio-body-text">
                                    <p>
                                        His pursuit of excellence led him to the Manhattan School of Music. Since then, Fernando has graced the stages of some of the world’s most prestigious venues, bringing a rare depth and sensitivity to roles like Sarastro in <i>Die Zauberflöte</i> and Bartolo in <i>Le nozze di Figaro</i>.
                                    </p>
                                    <p>
                                        Whether performing the profound sacred works of Verdi or the intricate lieder of Brahms, Fernando’s commitment to "The Process" ensures every note is infused with life and truth.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 5. Image: Stage (Right) */}
                        <div className="bio-grid-item reveal">
                            <div className="bio-image-module">
                                <img src="/images/profile-3.JPG" alt="Fernando Watts Artistry" className="bio-inline-image" />
                            </div>
                        </div>

                        {/* 6. Vision - Full Width Span */}
                        <div className="bio-grid-item full-width reveal">
                            <div className="bio-module vision-module text-center">
                                <div className="quote-wrap mb-md">
                                    <span className="ornament">“</span>
                                </div>
                                <span className="bio-section-label">Artist's Mission</span>
                                <h2 className="bio-section-title">The Artistic Path</h2>
                                <div className="bio-body-text">
                                    <p>
                                        Fernando believes that the journey of an artist is one of continuous evolution. His mission is defined by a pursuit of vocal truth and emotional clarity, grounded in the discipline of his Caribbean roots and the rigor of the international stage.
                                    </p>
                                    <p>
                                        By valuing steady growth and artistic integrity over immediate acclaim, he ensures that every performance is not merely a display of talent, but a profound testament to the power of patience.
                                    </p>
                                    <div className="motto-box mt-lg">
                                        <span className="motto-label">Motto</span>
                                        <h2 className="motto-text">“Trust in the process.”</h2>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Footer Buffer */}
                    <div style={{ height: '20vh' }}></div>
                </div>
            </div>
        </div>
    );
};

export default Bio;
