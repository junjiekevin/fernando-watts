import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Youtube, Send, ShieldCheck, RefreshCw } from 'lucide-react';

const Contact = () => {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);
        const form = e.target;
        const formData = new FormData(form);

        try {
            // Using Formspree for actual email delivery
            // NOTE: You will need to replace 'mqaeedoz' with your actual Formspree ID
            // or I can funnel it to your email if you have the plan.
            const response = await fetch('https://formspree.io/f/mqaeedoz', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus('SUCCESS');
                form.reset();
            } else {
                throw new Error('Failed to send');
            }
        } catch (err) {
            setError('Something went wrong. Please try again later or connect via social media.');
        } finally {
            setLoading(false);
        }
    };

    if (status === 'SUCCESS') {
        return (
            <div className="contact-immersive-section">
                <div className="contact-bg-wrapper"></div>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <div className="glass-card text-center page-fade-in">
                        <div className="social-icon-box mx-auto mb-lg" style={{ width: '80px', height: '80px', color: 'var(--color-accent)' }}>
                            <ShieldCheck size={48} />
                        </div>
                        <h2 className="section-title">Message Received</h2>
                        <p className="lead mt-md">
                            Thank you for reaching out. Fernando has been notified and will be in touch with you shortly.
                        </p>
                        <button onClick={() => setStatus('')} className="btn btn-primary mt-lg">
                            Send Another Message
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="contact-immersive-section">
            <div className="contact-bg-wrapper"></div>

            <div className="container">
                <div className="contact-header-block page-fade-in">
                    <h1 className="section-title">Get in Touch</h1>
                    <p className="lead mt-md">For performance bookings, recital inquiries, or masterclasses, please connect via the secure portal below.</p>
                </div>

                <div className="glass-card page-fade-in">
                    <div className="contact-layout-split">
                        {/* Info Column */}
                        <div className="contact-info-panel">
                            <h2 className="section-subtitle mb-lg" style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', paddingBottom: '1rem' }}>Digital Channels</h2>
                            <div className="social-glass-list">
                                <a href="https://www.instagram.com/100_wattz?igsh=MXMzZ3c1b2pjZ2d0OQ==" target="_blank" rel="noopener noreferrer" className="social-glass-item">
                                    <Instagram size={24} className="accent" />
                                    <div className="social-text">
                                        <h4>Instagram</h4>
                                        <p>@100_wattz</p>
                                    </div>
                                </a>
                                <a href="https://www.facebook.com/share/182J5yq1Wb/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-glass-item">
                                    <Facebook size={24} className="accent" />
                                    <div className="social-text">
                                        <h4>Facebook</h4>
                                        <p>Fernando Watts</p>
                                    </div>
                                </a>
                                <a href="https://youtube.com/@fernandowatts7371?si=n-BJGPv_4cbHVj5b" target="_blank" rel="noopener noreferrer" className="social-glass-item">
                                    <Youtube size={24} className="accent" />
                                    <div className="social-text">
                                        <h4>YouTube</h4>
                                        <p>Official Channel</p>
                                    </div>
                                </a>
                                <a href="https://www.tiktok.com/@fernandowatts?lang=en" target="_blank" rel="noopener noreferrer" className="social-glass-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="accent" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.589 6.686a4.944 4.944 0 0 1-3.778-3.787V2.553h-3.307v12.403c0 2.188-1.777 3.965-3.968 3.965a3.966 3.966 0 0 1-3.968-3.965 3.966 3.966 0 0 1 3.968-3.965c.429 0 .842.07 1.228.198V7.817a7.213 7.213 0 0 0-1.228-.105c-3.977 0-7.227 3.251-7.227 7.228a7.23 7.23 0 0 0 7.227 7.228c3.977 0 7.227-3.251 7.227-7.228V9.283a8.196 8.196 0 0 0 5.255 1.868v-3.31a4.912 4.912 0 0 1-1.428-.155z" />
                                    </svg>
                                    <div className="social-text">
                                        <h4>TikTok</h4>
                                        <p>@fernandowatts</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="contact-form-panel">
                            {error && (
                                <div className="error-message mb-md p-md rounded" style={{ background: 'rgba(255, 0, 0, 0.1)', color: '#ff6b6b', border: '1px solid rgba(255, 0, 0, 0.2)' }}>
                                    {error}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="contact-form-refined">
                                <div className="form-field-wrapper">
                                    <input type="text" name="name" id="name" className="floating-input" placeholder=" " required />
                                    <label htmlFor="name">Full Name</label>
                                </div>

                                <div className="form-field-wrapper">
                                    <input type="email" name="email" id="email" className="floating-input" placeholder=" " required />
                                    <label htmlFor="email">Email Address</label>
                                </div>

                                <div className="form-field-wrapper">
                                    <input type="text" name="subject" id="subject" className="floating-input" placeholder=" " required />
                                    <label htmlFor="subject">Subject</label>
                                </div>

                                <div className="form-field-wrapper">
                                    <textarea name="message" id="message" className="floating-input" style={{ minHeight: '180px' }} placeholder=" " required></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>


                                <button type="submit" disabled={loading} className="btn btn-primary w-100 py-md" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
                                    {loading ? (
                                        <>
                                            <RefreshCw className="animate-spin" size={20} /> Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} /> Send Inquiry
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
