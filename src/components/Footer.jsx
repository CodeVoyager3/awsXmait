import React from 'react';


const Footer = ({ setPage }) => {
    
    const socialLinks = [
        { name: 'LinkedIn', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg> },
        { name: 'Twitter', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg> },
        { name: 'Instagram', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg> },
        { name: 'GitHub', href: '#', icon: <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg> }
    ];

    
    const quickLinks = [
        { name: 'Home', page: 'home' },
        { name: 'About Us', page: 'about' },
        { name: 'Events', page: 'EventsPage' },
        { name: 'Gallery', page: 'GalleryPage' },
        { name: 'Contact', page: 'contact' }
    ];

    
    const resourceLinks = [
        { name: 'About AWS', page: 'about-aws' },
        { name: 'About MAIT', page: 'about-mait' },
        { name: 'AWS Training', href: 'https://aws.amazon.com/training/', external: true },
        { name: 'Certifications', href: 'https://aws.amazon.com/certification/', external: true }
    ];

    return (
        <footer className="relative bg-gray-900 border-t border-gray-700/50 text-gray-400 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="absolute inset-0 opacity-30" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.02) 50px, rgba(255,255,255,0.02) 51px)`
            }}></div>

            <div className="relative container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold tracking-wider text-white">
                                <span className="text-orange-400">AWS</span> 
                                <span className="text-gray-400 mx-1">x</span> 
                                <span className="text-white">MAIT</span>
                            </h3>
                            <div className="h-1 w-16 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mt-2"></div>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-400 mb-6">
                            Empowering students with cutting-edge cloud computing skills and industry connections.
                        </p>

                        <div className="flex gap-3">
                            {socialLinks.map(social => (
                                <a 
                                    key={social.name} 
                                    href={social.href} 
                                    aria-label={social.name}
                                    className="group relative p-2 bg-gray-800/50 rounded-lg border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:scale-110"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:to-transparent rounded-lg transition-all duration-300"></div>
                                    <div className="relative text-gray-400 group-hover:text-orange-400 transition-colors duration-300">
                                        {social.icon}
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map(link => (
                                <li key={link.page}>
                                    <button 
                                        onClick={() => {
                                            setPage(link.page);
                                            window.scrollTo({ top: 0, behavior: 'smooth' });
                                        }}
                                        className="group text-sm flex items-center gap-2 hover:text-orange-400 transition-all duration-300 hover:translate-x-1"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-orange-400 transition-colors duration-300"></span>
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                            Resources
                        </h4>
                        <ul className="space-y-3">
                            {resourceLinks.map(link => (
                                <li key={link.name}>
                                    {link.external ? (
                                        <a 
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group text-sm flex items-center gap-2 hover:text-orange-400 transition-all duration-300 hover:translate-x-1"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-orange-400 transition-colors duration-300"></span>
                                            {link.name}
                                            <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    ) : (
                                        <button 
                                            onClick={() => {
                                                setPage(link.page);
                                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                            }}
                                            className="group text-sm flex items-center gap-2 hover:text-orange-400 transition-all duration-300 hover:translate-x-1"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-orange-400 transition-colors duration-300"></span>
                                            {link.name}
                                        </button>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-orange-500 rounded-full"></span>
                            Get In Touch
                        </h4>
                        <div className="space-y-4">
                            <a 
                                href="mailto:awsacademymait@gmail.com" 
                                className="group flex items-start gap-3 text-sm hover:text-orange-400 transition-colors duration-300"
                            >
                                <div className="flex-shrink-0 p-2 bg-gray-800/50 rounded-lg border border-gray-700 group-hover:border-orange-500/50 transition-colors duration-300">
                                    <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-white mb-1">Email</p>
                                    <span className="group-hover:underline">awsacademymait@gmail.com</span>
                                </div>
                            </a>
                            
                            <div className="flex items-start gap-3 text-sm">
                                <div className="flex-shrink-0 p-2 bg-gray-800/50 rounded-lg border border-gray-700">
                                    <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-semibold text-white mb-1">Location</p>
                                    <span>MAIT, Sector 22,<br />Rohini, Delhi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="pt-8 border-t border-gray-700/50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-gray-500 text-center md:text-left">
                            &copy; {new Date().getFullYear()} AWS x MAIT Student Chapter. All Rights Reserved.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6 text-sm">
                            <button 
                                onClick={() => {
                                    setPage('contact');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="text-gray-500 hover:text-orange-400 transition-colors duration-300"
                            >
                                Privacy Policy
                            </button>
                            <button 
                                onClick={() => {
                                    setPage('contact');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="text-gray-500 hover:text-orange-400 transition-colors duration-300"
                            >
                                Terms of Service
                            </button>
                            <button 
                                onClick={() => {
                                    setPage('contact');
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="text-gray-500 hover:text-orange-400 transition-colors duration-300"
                            >
                                Code of Conduct
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;