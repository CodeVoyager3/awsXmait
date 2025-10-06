import React, { useState, useEffect, useRef } from 'react';

// Data for the page, extracted from mait.ac.in
const maitData = {
    keyFacts: [
        { value: '1999', label: 'Established' },
        { value: 'GGSIPU', label: 'Affiliation' },
        { value: 'AICTE', label: 'Approved By' },
        { value: 'NBA', label: 'Accredited' }
    ],
    vision: "To attain global excellence through education, innovation, research, and work ethics with the commitment to serve humanity.",
    missionPoints: [
        "To provide excellence in Engineering & Technical Education and Research.",
        "To develop strong communication skills and create a culture for life-long learning.",
        "To establish a symbiotic relationship with industries for mutual growth.",
        "To develop entrepreneurship programmes and promote student entrepreneurs.",
        "To create awareness for social, ethical, cultural, and human values."
    ],
    departments: [
        { name: "Computer Science", icon: "💻", color: "from-blue-500 to-cyan-500" },
        { name: "Information Technology", icon: "🌐", color: "from-green-500 to-emerald-500" },
        { name: "Electronics & Communication", icon: "📡", color: "from-purple-500 to-pink-500" },
        { name: "Electrical & Electronics", icon: "⚡", color: "from-yellow-500 to-orange-500" },
        { name: "Mechanical & Automation", icon: "⚙️", color: "from-gray-500 to-slate-600" },
        { name: "Artificial Intelligence", icon: "🤖", color: "from-indigo-500 to-violet-500" }
    ],
    campusFacilities: [
        { 
            icon: '🛜', 
            name: 'Wi-Fi Campus',
            description: 'High-speed internet connectivity across the entire campus',
            color: 'from-blue-500/20 to-cyan-500/20'
        },
        { 
            icon: '🔬', 
            name: 'Modern Labs',
            description: 'State-of-the-art laboratories equipped with latest technology',
            color: 'from-purple-500/20 to-pink-500/20'
        },
        { 
            icon: '📚', 
            name: 'Stocked Library',
            description: 'Extensive collection of books, journals, and digital resources',
            color: 'from-green-500/20 to-emerald-500/20'
        },
        { 
            icon: '🏋️', 
            name: 'Gymnasium',
            description: 'Well-equipped fitness center for student wellness',
            color: 'from-red-500/20 to-orange-500/20'
        },
        { 
            icon: '🎭', 
            name: 'Auditorium',
            description: 'Modern auditorium for events and cultural activities',
            color: 'from-yellow-500/20 to-amber-500/20'
        },
        { 
            icon: '🏠', 
            name: 'Boys Hostel',
            description: 'Comfortable accommodation with all essential amenities',
            color: 'from-indigo-500/20 to-violet-500/20'
        }
    ]
};

// Main Component for the About MAIT Page
const AboutMaitPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section 
            ref={sectionRef}
            id="about-mait" 
            className="relative bg-gray-900 py-20 px-6 overflow-hidden"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }}></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header section */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                    <img src="./Mait_Logo.png" alt="MAIT Logo" className="h-24 mx-auto mb-6 bg-white rounded-xl p-3" />
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                        Maharaja Agrasen Institute of Technology
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">A legacy of excellence in technical education and research since 1999.</p>
                </div>

                {/* Key Facts Section */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    {maitData.keyFacts.map((fact, index) => (
                        <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
                            <div className="text-4xl font-bold text-blue-400 mb-2">{fact.value}</div>
                            <div className="text-sm text-gray-300">{fact.label}</div>
                        </div>
                    ))}
                </div>

                {/* Vision and Mission Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                    <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <h3 className="text-3xl font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-gray-300 leading-relaxed text-lg border-l-4 border-blue-500 pl-6">{maitData.vision}</p>
                    </div>
                    <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                        <ul className="space-y-3 text-gray-300">
                            {maitData.missionPoints.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Academic Departments - Enhanced */}
                <div className={`mb-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h3 className="text-4xl font-bold text-white mb-8 text-center">
                        Academic <span className="text-blue-400">Departments</span>
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {maitData.departments.map((dept, index) => (
                            <div 
                                key={index} 
                                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${dept.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                                            {dept.icon}
                                        </div>
                                        <div className="flex-1">
                                            <h4 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                                                {dept.name}
                                            </h4>
                                        </div>
                                    </div>
                                    <div className={`h-1 w-full bg-gradient-to-r ${dept.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Campus Facilities - Enhanced */}
                <div className={`mb-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h3 className="text-4xl font-bold text-white mb-8 text-center">
                        Campus Life & <span className="text-blue-400">Facilities</span>
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {maitData.campusFacilities.map((facility, index) => (
                            <div 
                                key={index} 
                                className="group relative bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${facility.color} rounded-2xl transition-all duration-300`}></div>
                                <div className="relative z-10">
                                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                                        {facility.icon}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                                        {facility.name}
                                    </h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {facility.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className={`text-center transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                     <a 
                        href="https://mait.ac.in/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-4 px-10 rounded-full overflow-hidden shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 hover:scale-105"
                    >
                        <span className="relative z-10">Visit Official Website</span>
                        <svg className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                </div>
            </div>

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
            `}</style>
        </section>
    );
};

export default AboutMaitPage;