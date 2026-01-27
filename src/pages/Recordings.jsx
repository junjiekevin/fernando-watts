import React from 'react';
import { Link } from 'react-router-dom';
import { recordings } from '../data/recordings';
import { Play } from 'lucide-react';

import recordingsBanner from '../assets/images/banner_recordings.jpg';

const Recordings = () => {
    return (
        <div className="page-fade-in pt-navbar">
            <div className="page-banner recordings-banner" style={{ backgroundImage: `url(${recordingsBanner})` }}></div>
            <section className="section">
                <div className="container">
                    <h1 className="section-title text-center">Recordings</h1>
                    <div className="recordings-grid mt-lg">
                        {recordings.map((rec) => (
                            <Link to={`/recordings/${rec.id}`} key={rec.id} className="recording-card">
                                <div className="recording-thumbnail-container">
                                    <img src={rec.thumbnail} alt={rec.title} className="recording-thumbnail" />
                                    <div className="recording-play-overlay">
                                        <Play fill="currentColor" size={48} />
                                    </div>
                                </div>
                                <div className="recording-grid-info mt-sm">
                                    <p className="recording-grid-date">{rec.date}</p>
                                    <h3 className="recording-grid-title">{rec.title}</h3>
                                    <p className="recording-grid-composer">{rec.composer}</p>
                                    <p className="recording-grid-collaborator">{rec.collaborator}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Recordings;
