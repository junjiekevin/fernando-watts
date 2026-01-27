import img1 from '../assets/images/IMG_1637.jpg';
import img2 from '../assets/images/IMG_1638.jpg';
import img3 from '../assets/images/IMG_1639.jpg';
import img4 from '../assets/images/IMG_1640.jpg';
import img5 from '../assets/images/IMG_1641.jpg';
import img6 from '../assets/images/IMG_1642.jpg';
import img7 from '../assets/images/IMG_1643.jpg';
import img8 from '../assets/images/IMG_1644.jpg';

const Gallery = () => {
    const images = [
        { src: img1, alt: "Fernando Watts Performance 1" },
        { src: img2, alt: "Fernando Watts Portrait 1" },
        { src: img3, alt: "Fernando Watts Performance 2" },
        { src: img4, alt: "Fernando Watts Portrait 2" },
        { src: img5, alt: "Fernando Watts On Stage" },
        { src: img6, alt: "Fernando Watts Portrait 3" },
        { src: img7, alt: "Fernando Watts Backstage" },
        { src: img8, alt: "Fernando Watts Grand Opera" },
    ];

    return (
        <div className="page-fade-in pt-navbar">
            <section className="section">
                <div className="container">
                    <h1 className="section-title text-center">Gallery</h1>
                    <div className="gallery-grid mt-lg">
                        {images.map((img, index) => (
                            <div key={index} className="gallery-card">
                                <img src={img.src} alt={img.alt} className="gallery-image" />
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
