import React, { useState, useEffect, useRef } from 'react';

// Main Component for the Gallery Page
const GalleryPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const sectionRef = useRef(null);

    // Create an array of image paths
    const images = Array.from({ length: 14 }, (_, i) => `/img${i + 1}.jpeg`);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    // Lightbox navigation
    const showNextImage = () => {
        const currentIndex = images.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
    };

    const showPrevImage = () => {
        const currentIndex = images.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
    };
    
    // Handle keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (selectedImage) {
                if (e.key === 'ArrowRight') showNextImage();
                if (e.key === 'ArrowLeft') showPrevImage();
                if (e.key === 'Escape') setSelectedImage(null);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, images]);


    return (
        <section 
            ref={sectionRef}
            id="gallery" 
            className="relative bg-gray-900 py-20 px-6 overflow-hidden min-h-screen"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }}></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header section */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                    <div className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-3 mb-6">
                        <p className="text-orange-400 font-semibold">Memories</p>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                        Chapter <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Inauguration</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">A glimpse into the official launch of the AWS x MAIT student chapter.</p>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                    {images.map((imgSrc, index) => (
                        <div 
                            key={index}
                            className={`group relative aspect-square transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            onClick={() => setSelectedImage(imgSrc)}
                        >
                            <img 
                                src={imgSrc} 
                                alt={`Inauguration Image ${index + 1}`}
                                className="absolute inset-0 w-full h-full object-cover rounded-xl border-2 border-gray-700/50 group-hover:border-orange-500/50 transition-all duration-300 transform group-hover:scale-105 cursor-pointer"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex items-center justify-center">
                                <svg className="w-10 h-10 text-white opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in">
                    <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 text-white text-4xl hover:text-orange-400 transition-colors">&times;</button>
                    
                    <button onClick={showPrevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    
                    <img src={selectedImage} alt="Selected view" className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-2xl" />

                    <button onClick={showNextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                         <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
            )}

            <style>{`
                @keyframes pulse-slow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.5; transform: scale(1.1); }
                }
                .animate-pulse-slow {
                    animation: pulse-slow 8s ease-in-out infinite;
                }
                .animate-pulse-slow-delayed {
                    animation: pulse-slow 8s ease-in-out infinite;
                    animation-delay: 2s;
                }
                @keyframes fade-in {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                .animate-fade-in {
                    animation: fade-in 0.3s ease-out;
                }
            `}</style>
        </section>
    );
};

export default GalleryPage;
