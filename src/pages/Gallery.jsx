import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';

const Gallery = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const images = [
        { src: '/images/A7404892_RRSS.jpeg', alt: "Le Nozze di Figaro - Lyric Opera Studio Weimar" },
        { src: '/images/IMG_0033.JPG', alt: "Fernando Watts Recital" },
        { src: '/images/IMG_1641.jpg', alt: "Le Nozze di Figaro - Lyric Opera Studio Weimar" },
        { src: '/images/LOSW_LE NOZZE_23-07-25_329_RRSS.jpeg', alt: "Le Nozze di Figaro - Lyric Opera Studio Weimar" },
        { src: '/images/banner_gallery.jpeg', alt: "Le Nozze di Figaro - Lyric Opera Studio Weimar" },
        { src: '/images/banner_news.jpeg', alt: "Fernando Watts - News Highlight" },
        { src: '/images/banner_recordings.jpeg', alt: "Le Nozze di Figaro - Lyric Opera Studio Weimar" },
        { src: '/images/banner_schedule.jpeg', alt: "Fernando Watts - On Stage" },
        { src: '/images/contact-background.jpg', alt: "Fernando Watts - Portrait Background" },
        { src: '/images/home.jpeg', alt: "Fernando Watts - Home Portrait" },
        { src: '/images/IMG_0034.jpeg', alt: "Fernando Watts - Production Still" },
    ];

    const nextImage = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        e.stopPropagation();
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
        <div className="page-fade-in pt-navbar">
            <SEO
                title="Gallery"
                description="Official photography and production stills of Fernando Watts. Visual portfolio of professional opera and recital work."
            />
            <div className="page-banner gallery-banner" style={{ backgroundImage: `url(/images/banner_gallery.jpeg)` }}></div>
            <section className="section">
                <div className="container">
                    <h1 className="section-title text-center reveal">Gallery</h1>
                    <div className="gallery-grid mt-lg">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="gallery-card reveal"
                                onClick={() => setSelectedIndex(index)}
                            >
                                <img src={img.src} alt={img.alt} className="gallery-image" loading="lazy" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedIndex !== null && (
                <div className="gallery-modal" onClick={() => setSelectedIndex(null)}>
                    <button className="modal-close" onClick={() => setSelectedIndex(null)}>
                        <X size={32} />
                    </button>

                    <button className="nav-btn prev" onClick={prevImage}>
                        <ChevronLeft size={48} />
                    </button>

                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={images[selectedIndex].src}
                            alt={images[selectedIndex].alt}
                            className="modal-image"
                        />
                    </div>

                    <div className="modal-pagination">
                        {selectedIndex + 1} / {images.length}
                    </div>

                    <button className="nav-btn next" onClick={nextImage}>
                        <ChevronRight size={48} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Gallery;
