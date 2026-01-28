import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Bio from './pages/Bio';
import Schedule from './pages/Schedule';
import News from './pages/News';
import Gallery from './pages/Gallery';
import Recordings from './pages/Recordings';
import Contact from './pages/Contact';
import VideoDetail from './pages/VideoDetail';

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/news" element={<News />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/recordings" element={<Recordings />} />
          <Route path="/recordings/:id" element={<VideoDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

export default App;
