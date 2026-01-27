import profileImg from '../assets/images/profile.jpg';
import SEO from '../components/SEO';

const Bio = () => {
    return (
        <div className="parallax-section">
            <SEO
                title="Biography"
                description="Learn about Fernando Watts, a distinguished classical bass singer known for his resonant presence and commanding artistry in opera and recital."
                keywords="Fernando Watts Bio, Bass Singer Biography, Opera Artist, Classical Music Career"
            />
            <div className="parallax-backdrop"></div>
            <div className="page-fade-in">
                <section className="section">
                    <div className="container bio-layout">
                        <div className="bio-image">
                            <img src={profileImg} alt="Fernando Watts Profile" className="profile-photo" />
                        </div>
                        <div className="bio-content">
                            <h1 className="section-title reveal">Biography</h1>
                            <p className="lead mt-md">
                                Hailed for his "resonant and commanding presence," Fernando Watts is a burgeoning force in the world of classical opera.
                            </p>
                            <div className="bio-text mt-md">
                                <p>
                                    Fernando Watts is a distinguished Bass whose artistry is defined by deep musical intelligence and a voice of remarkable power and warmth.
                                </p>
                                <p className="mt-sm">
                                    His repertoire spans from the profound depths of Handel and Mozart to the dramatic intensity of Verdi and Wagner.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Bio;
