import img1637 from '../assets/images/IMG_1637.jpg';
import img1638 from '../assets/images/IMG_1638.jpg';
import img1639 from '../assets/images/IMG_1639.jpg';
import img1640 from '../assets/images/IMG_1640.jpg';
import img1641 from '../assets/images/IMG_1641.jpg';
import img1642 from '../assets/images/IMG_1642.jpg';
import img1643 from '../assets/images/IMG_1643.jpg';
import img1644 from '../assets/images/IMG_1644.jpg';
import img1646 from '../assets/images/IMG_1646.jpg';
import img1647 from '../assets/images/IMG_1647.jpg';
import galleryBanner from '../assets/images/banner_gallery.jpg';
import SEO from '../components/SEO';

const Gallery = () => {
    const images = [
        { src: img1637, alt: "Fernando Watts Performance" },
        { src: img1638, alt: "Fernando Watts Portrait" },
        { src: img1639, alt: "Fernando Watts Recital" },
        { src: img1640, alt: "Fernando Watts Stage Presence" },
        { src: img1641, alt: "Fernando Watts Opera Debut" },
        { src: img1642, alt: "Fernando Watts Classical Bass" },
        { src: img1643, alt: "Fernando Watts Live Performance" },
        { src: img1644, alt: "Fernando Watts Leading Role" },
        { src: img1646, alt: "Fernando Watts Professional Talent" },
        { src: img1647, alt: "Fernando Watts Dramatic Portrait" },
    ];

    return (
        <div className="page-fade-in pt-navbar">
            <SEO
                title="Gallery"
                description="Official photography and production stills of Fernando Watts. Visual portfolio of professional opera and recital work."
            />
            <div className="page-banner gallery-banner" style={{ backgroundImage: `url(${galleryBanner})` }}></div>
            <section className="section">
                <div className="container">
                    <h1 className="section-title text-center reveal">Gallery</h1>
                    <div className="gallery-grid mt-lg">
                        {images.map((img, index) => (
                            <div key={index} className="gallery-card">
                                <img src={img.src} alt={img.alt} className="gallery-image" loading="lazy" />
                                <div className="gallery-overlay">
                                    <span className="overlay-text">{img.alt}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Gallery;
