import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { recordings } from '../data/recordings';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const VideoDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find current recording and its index
    const recordingIndex = recordings.findIndex(r => r.id === id);
    const recording = recordings[recordingIndex];

    const [videoError, setVideoError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Reset state when navigating between videos
    useEffect(() => {
        setVideoError(null);
        setIsLoading(true);
    }, [id]);

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

    const handleVideoError = (e) => {
        console.error('Video error:', e);
        setVideoError('Unable to load video. The file may be too large or in an unsupported format.');
        setIsLoading(false);
    };

    const handleVideoLoadStart = () => {
        console.log('Video loading started:', recording.videoSource);
        setIsLoading(true);
    };

    const handleVideoCanPlay = () => {
        console.log('Video can play');
        setIsLoading(false);
    };

    const nextRecording = () => {
        const nextIndex = (recordingIndex + 1) % recordings.length;
        navigate(`/recordings/${recordings[nextIndex].id}`);
    };

    const prevRecording = () => {
        const prevIndex = (recordingIndex - 1 + recordings.length) % recordings.length;
        navigate(`/recordings/${recordings[prevIndex].id}`);
    };

    return (
        <div className="page-fade-in pt-navbar">
            <section className="theater-section">
                <div className="theater-container">
                    <div className="video-player-wrapper">
                        {/* Navigation Arrows */}
                        <div className="theater-nav-control-group">
                            <button className="theater-nav-arrow left" onClick={prevRecording} aria-label="Previous">
                                <ChevronLeft size={44} />
                            </button>
                            <button className="theater-nav-arrow right" onClick={nextRecording} aria-label="Next">
                                <ChevronRight size={44} />
                            </button>
                        </div>

                        <div className="video-container">
                            {recording.videoType === 'local' ? (
                                <>
                                    {isLoading && !videoError && (
                                        <div className="video-overlay-msg" style={{ color: 'white', fontSize: '1.2rem' }}>
                                            Loading video...
                                        </div>
                                    )}
                                    {videoError && (
                                        <div className="video-overlay-msg" style={{ color: '#D4AF37', fontSize: '1.2rem', padding: '2rem' }}>
                                            {videoError}
                                        </div>
                                    )}
                                    <video
                                        key={recording.id}
                                        controls
                                        playsInline
                                        preload="auto"
                                        className="native-video-player"
                                        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                                        poster={recording.thumbnail}
                                        onError={handleVideoError}
                                        onLoadStart={handleVideoLoadStart}
                                        onCanPlay={handleVideoCanPlay}
                                    >
                                        <source src={recording.videoSource} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </>
                            ) : (
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
                            )}
                        </div>
                    </div>

                    <div className="theater-metadata container mt-video-detail">
                        <div className="theater-pagination mb-sm">
                            {recordingIndex + 1} / {recordings.length}
                        </div>
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
