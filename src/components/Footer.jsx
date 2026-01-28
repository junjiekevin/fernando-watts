import React from 'react';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-info">
                    <h3 className="footer-logo">FERNANDO <span className="accent">WATTS</span></h3>
                    <p>Classical Singer | <span className="gold-accent">Bass</span></p>
                    <p className="footer-availability" style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '0.5rem', color: 'var(--color-accent)' }}>Currently accepting inquiries for Season 2026/27</p>
                </div>

                <div className="footer-socials">
                    <a href="https://www.facebook.com/share/182J5yq1Wb/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                    <a href="https://www.instagram.com/100_wattz?igsh=MXMzZ3c1b2pjZ2d0OQ==" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                    <a href="https://youtube.com/@fernandowatts7371?si=n-BJGPv_4cbHVj5b" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
                    <a href="https://www.tiktok.com/@fernandowatts?lang=en" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.589 6.686a4.944 4.944 0 0 1-3.778-3.787V2.553h-3.307v12.403c0 2.188-1.777 3.965-3.968 3.965a3.966 3.966 0 0 1-3.968-3.965 3.966 3.966 0 0 1 3.968-3.965c.429 0 .842.07 1.228.198V7.817a7.213 7.213 0 0 0-1.228-.105c-3.977 0-7.227 3.251-7.227 7.228a7.23 7.23 0 0 0 7.227 7.228c3.977 0 7.227-3.251 7.227-7.228V9.283a8.196 8.196 0 0 0 5.255 1.868v-3.31a4.912 4.912 0 0 1-1.428-.155z" />
                        </svg>
                    </a>
                </div>

                <div className="footer-copy">
                    <p>&copy; {new Date().getFullYear()} Fernando Watts. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
