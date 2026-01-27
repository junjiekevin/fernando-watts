import React from 'react';
import { Facebook, Instagram, Youtube, Mail } from 'lucide-react';
import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-info">
                    <h3 className="footer-logo">FERNANDO <span className="accent">WATTS</span></h3>
                    <p>Classical Singer | Bass</p>
                </div>

                <div className="footer-socials">
                    <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                    <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                    <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
                    <a href="mailto:contact@fernandowatts.com" aria-label="Email"><Mail size={20} /></a>
                </div>

                <div className="footer-copy">
                    <p>&copy; {new Date().getFullYear()} Fernando Watts. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
