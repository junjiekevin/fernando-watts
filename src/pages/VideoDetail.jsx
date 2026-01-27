import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { recordings } from '../data/recordings';
import { ChevronLeft } from 'lucide-react';

const VideoDetail = () => {
    const { id } = useParams();
    const recording = recordings.find(r => r.id === id);

    if (!recording) {
        return (
            <div className="page-fade-in pt-navbar">
                <div className="container text-center section">
                    <h1 className="section-title">Video Not Found</h1>
                    <Link to="/recordings" className="btn btn-outline mt-md">Back to Recordings</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="page-fade-in pt-navbar">
            <section className="theater-section">
                <div className="theater-container">
                    <div className="video-player-wrapper">
                        <div className="video-container">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${recording.youtubeId}?si=5Yh6I8aO0_J6aSDS&autoplay=0`}
                                title={recording.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    <div className="theater-metadata container mt-video-detail">
                        <h1 className="theater-title">
                            {recording.title}
                            <span className="theater-title-date"> — {recording.date} —</span>
                        </h1>
                        <div className="theater-details mt-md">
                            <h2 className="theater-composer">{recording.composer}</h2>
                            <p className="theater-collaborator">{recording.collaborator}</p>
                        </div>

                        <div className="theater-footer mt-lg">
                            <Link to="/recordings" className="back-link-refined">
                                <ChevronLeft size={18} /> Back to Recordings
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VideoDetail;
