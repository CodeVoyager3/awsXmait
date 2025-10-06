import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import AboutMaitPage from './pages/AboutMaitPage.jsx';
import AboutAwsPage from './pages/AboutAwsPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import EventsPage from './pages/EventsPage.jsx';

const useFadeInOnPageChange = (page) => {
    const elRef = useRef(null);
    useEffect(() => {
        const el = elRef.current;
        if (el) {
            el.classList.remove('is-visible');
            const timer = setTimeout(() => el.classList.add('is-visible'), 50);
            return () => clearTimeout(timer);
        }
    }, [page]);
    return elRef;
};


export default function App() {
    const [page, setPage] = useState('home');
    const fadeInRef = useFadeInOnPageChange(page);

    
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [page]);

    const renderPage = () => {
        switch (page) {
            case 'about':
                return <AboutPage />;
            case 'about-mait':
                return <AboutMaitPage />;
            case 'about-aws':
                return <AboutAwsPage />;
            case 'GalleryPage':
                return <GalleryPage setPage={setPage} />;
            case 'EventsPage':
                return <EventsPage setPage={setPage}/>;
            case 'contact':
                return <ContactPage/>;
            case 'home':
            default:
                return <HomePage setPage={setPage} />;
        }
    };

    return (
        <div> 
            <style>{`
                body { 
                    font-family: 'Inter', sans-serif; 
                    background-color: #1a202c; 
                    margin: 0;
                    padding: 0;
                }
                .fade-in-section {
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
                }
                .fade-in-section.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }
            `}</style>
            
            <Header activePage={page} setPage={setPage} />

            <main ref={fadeInRef} className="fade-in-section">
                {renderPage()}
            </main>

            <Footer setPage={setPage} />
        </div>
    );
}