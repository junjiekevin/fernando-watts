import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import '../styles/navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <Link to="/" className="logo-text">
                    Fernando <span className="accent">Watts</span>
                </Link>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className={location.pathname === '/' ? 'active' : ''}>HOME</Link>
                    <Link to="/bio" className={location.pathname === '/bio' ? 'active' : ''}>BIO</Link>
                    <Link to="/schedule" className={location.pathname === '/schedule' ? 'active' : ''}>SCHEDULE</Link>
                    <Link to="/news" className={location.pathname === '/news' ? 'active' : ''}>NEWS</Link>
                    <Link to="/gallery" className={location.pathname === '/gallery' ? 'active' : ''}>GALLERY</Link>
                    <Link to="/recordings" className={location.pathname === '/recordings' ? 'active' : ''}>RECORDINGS</Link>
                    <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>CONTACT</Link>
                </div>

                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
