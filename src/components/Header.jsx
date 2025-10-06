import React, { useState, useRef } from 'react';
const Header = ({ activePage, setPage }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isAboutMenuOpen, setIsAboutMenuOpen] = useState(false);
    const [isMobileAboutOpen, setIsMobileAboutOpen] = useState(false);
    const aboutMenuTimeout = useRef(null); 

    const handleAboutMenuEnter = () => {
        clearTimeout(aboutMenuTimeout.current);
        setIsAboutMenuOpen(true);
    };

    const handleAboutMenuLeave = () => {
        aboutMenuTimeout.current = setTimeout(() => {
            setIsAboutMenuOpen(false);
        }, 200); 
    };

    const NavLink = ({ page, children, className = '' }) => (
        <button
            onClick={() => { setPage(page); }}
            className={`relative px-2 py-1 transition-colors duration-300 group ${activePage === page ? 'text-orange-400' : 'text-gray-300 hover:text-white'} ${className}`}
        >
            {children}
            <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out ${activePage === page ? 'scale-x-100' : ''}`}></span>
        </button>
    );

    const MobileNavLink = ({ page, children, isSublink = false }) => (
        <button
            onClick={() => { setPage(page); setIsMobileMenuOpen(false); }}
            className={`block py-3 text-center rounded-lg w-full transition-all duration-300 ${isSublink ? 'text-base bg-gray-800/50' : 'text-lg'} ${activePage === page ? 'bg-orange-500/10 text-orange-400 font-semibold' : 'hover:bg-gray-700'}`}
        >
            {isSublink && <span className="mr-4 text-orange-400 opacity-50">&rarr;</span>}
            {children}
        </button>
    );

    return (
        <header className="bg-gray-900/70 backdrop-blur-lg sticky top-0 z-50 text-white border-b border-gray-700/50">
            <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
             
                <button onClick={() => setPage('home')} className="text-2xl font-bold tracking-wider hover:opacity-80 transition-opacity">
                    <span className="text-orange-400">AWS</span> 
                    <span className="text-gray-400 mx-1">x</span> 
                    <span className="text-white">MAIT</span>
                </button>

                
                <div className="hidden md:flex items-center space-x-8 font-medium">
                    <NavLink page="home">Home</NavLink>
                    
                    
                    <div 
                        className="relative"
                        onMouseEnter={handleAboutMenuEnter}
                        onMouseLeave={handleAboutMenuLeave}
                    >
                        <NavLink page="about" className="flex items-center gap-1">
                            About
                            <svg className={`w-4 h-4 transition-transform duration-300 ${isAboutMenuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </NavLink>
                        
                        {isAboutMenuOpen && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden animate-fade-in-down">
                                <button 
                                    onClick={() => { setPage('about-aws'); setIsAboutMenuOpen(false); }}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-orange-500/10 hover:text-orange-400 transition-colors"
                                >
                                    About AWS
                                </button>
                                <button 
                                    onClick={() => { setPage('about-mait'); setIsAboutMenuOpen(false); }}
                                    className="block w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-orange-500/10 hover:text-orange-400 transition-colors"
                                >
                                    About MAIT
                                </button>
                            </div>
                        )}
                    </div>

                    <NavLink page="EventsPage">Events</NavLink>
                    <NavLink page="GalleryPage">Gallery</NavLink>

                    <NavLink page="contact">Contact</NavLink>
                </div>

                
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-400">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                    </svg>
                </button>
            </nav>

            
            <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="px-4 pb-4 space-y-2 border-t border-gray-700/50 pt-4">
                    <MobileNavLink page="home">Home</MobileNavLink>
                    
                
                    <div>
                        <button 
                            onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                            className={`flex items-center justify-center py-3 text-center rounded-lg w-full text-lg transition-all duration-300 ${activePage === 'about' ? 'bg-orange-500/10 text-orange-400 font-semibold' : 'hover:bg-gray-700'}`}
                        >
                            About
                            <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${isMobileAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isMobileAboutOpen ? 'max-h-48 mt-2' : 'max-h-0'}`}>
                            <div className="space-y-2 pl-4">
                                <MobileNavLink page="about-aws" isSublink={true}>About AWS</MobileNavLink>
                                <MobileNavLink page="about-mait" isSublink={true}>About MAIT</MobileNavLink>
                            </div>
                        </div>
                    </div>
                   
                        <MobileNavLink page="EventsPage">Events</MobileNavLink>
                        <MobileNavLink page="GalleryPage">Gallery</MobileNavLink>

                    <MobileNavLink page="contact">Contact</MobileNavLink>
                </div>
            </div>
            
            
            <style>{`
                @keyframes fade-in-down {
                    0% {
                        opacity: 0;
                        transform: translateY(-10px) translateX(-50%);
                    }
                    100% {
                        opacity: 1;
                        transform: translateY(0) translateX(-50%);
                    }
                }
                .animate-fade-in-down {
                    animation: fade-in-down 0.2s ease-out;
                }
            `}</style>
        </header>
    );
};

export default Header;