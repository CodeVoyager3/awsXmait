import React, { useState, useEffect, useRef } from 'react';

const AboutCard = ({ logo, alt, title, description, logoBg = false, readMoreLink }) => (
    <div className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 h-full flex flex-col hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
        
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>

        <div className="relative z-10 flex flex-col flex-grow">
            
            <div className="mb-6">
                <img 
                    src={logo} 
                    alt={alt} 
                    className={`h-16 object-contain ${logoBg ? 'bg-white rounded-md p-2' : ''}`} 
                />
            </div>
            
            
            <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>

            <p className="text-gray-300 leading-relaxed flex-grow">{description}</p>

            <a 
                href={readMoreLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 font-semibold text-orange-500 group-hover:text-orange-400 transition-colors duration-300"
            >
                Read More
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
            </a>
        </div>
    </div>
);

const aboutData = {
    aws: {
        logo: "./awsLogo1.png",
        alt: "AWS Logo",
        title: "About AWS",
        description: "The world's most comprehensive and broadly adopted cloud platform, offering over 200 fully featured services from data centers globally. Millions of customers use AWS to lower costs, become more agile, and innovate faster.",
        readMoreLink: "https://aws.amazon.com/about-aws/"
    },
    mait: {
        logo: "./Mait_Logo.png",
        alt: "MAIT Logo",
        title: "About MAIT",
        description: "A premier engineering college in Delhi, affiliated with GGSIPU. MAIT is renowned for producing technically competent, socially responsible, and globally competitive professionals.",
        readMoreLink: "https://mait.ac.in/"
    },
    stats: [
        { number: '500+', label: 'Active Members', icon: '👥' },
        { number: '50+', label: 'Events Hosted', icon: '🎯' },
        { number: '100+', label: 'AWS Certifications', icon: '🏆' },
        { number: '20+', label: 'Industry Partners', icon: '🤝' }
    ],
    benefits: [
        { 
            icon: '☁️', 
            title: 'Cloud Learning', 
            description: 'Access to AWS training resources and hands-on labs'
        },
        { 
            icon: '📜', 
            title: 'Certifications', 
            description: 'Opportunities to earn industry-recognized AWS certifications'
        },
        { 
            icon: '💼', 
            title: 'Career Support', 
            description: 'Direct pathways to internships and full-time opportunities'
        },
        { 
            icon: '🌐', 
            title: 'Networking', 
            description: 'Connect with AWS professionals and fellow cloud enthusiasts'
        }
    ]
};

const AboutPage = () => {
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
            id="about" 
            className="relative bg-gray-900 py-20 px-6 overflow-hidden"
        >
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
            </div>
            <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }}></div>

            <div className="relative max-w-7xl mx-auto">
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <div className="h-px w-16 bg-gradient-to-r from-transparent to-orange-500"></div>
                        <div className="w-3 h-3 rounded-full bg-orange-500 animate-pulse"></div>
                        <div className="h-px w-16 bg-gradient-to-l from-transparent to-orange-500"></div>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                        The <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Collaboration</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">Uniting a global tech leader with a premier engineering institute to foster the next generation of cloud professionals.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-stretch">
                    <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <AboutCard {...aboutData.aws} />
                    </div>
                    <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <AboutCard {...aboutData.mait} logoBg />
                    </div>
                </div>

                <div className={`text-center mt-24 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="inline-block bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 md:p-12">
                        <h3 className="text-3xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            To bridge the gap between academia and industry by providing students with hands-on AWS cloud experience, industry-recognized certifications, and direct pathways to careers in cloud computing. We are committed to building a vibrant community of skilled and innovative cloud enthusiasts at MAIT.
                        </p>
                    </div>
                </div>

                <div className={`mt-24 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {aboutData.stats.map((stat, index) => (
                            <div key={index} className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
                                <div className="relative z-10">
                                    <div className="text-4xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                                    <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent mb-2">{stat.number}</div>
                                    <div className="text-gray-300 font-semibold">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={`mt-24 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="text-center mb-12">
                        <h3 className="text-4xl font-extrabold text-white mb-4">Why Join <span className="text-orange-400">AWS Cloud Club?</span></h3>
                        <p className="text-gray-400 max-w-2xl mx-auto">Unlock exclusive benefits and opportunities for your cloud computing journey</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {aboutData.benefits.map((benefit, index) => (
                            <div key={index} className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10">
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:to-transparent rounded-2xl transition-all duration-300"></div>
                                <div className="relative z-10">
                                    <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">{benefit.icon}</div>
                                    <h4 className="text-xl font-bold text-white mb-3">{benefit.title}</h4>
                                    <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                
                <div className={`mt-24 text-center transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    <div className="relative bg-gradient-to-r from-orange-500/10 via-orange-600/10 to-orange-500/10 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-12 overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(251,146,60,0.1),transparent_70%)]"></div>
                        <div className="relative z-10">
                            <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Ready to Start Your Cloud Journey?</h3>
                            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">Join AWS Cloud Club MAIT today and become part of a thriving community of cloud enthusiasts</p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="group relative px-8 py-4 bg-orange-500 text-white font-bold rounded-xl overflow-hidden transition-all duration-300 hover:bg-orange-600 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        Join Now
                                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                </button>
                                <button className="group px-8 py-4 bg-gray-800/50 backdrop-blur-sm text-white font-bold rounded-xl border-2 border-gray-700 hover:border-orange-500 transition-all duration-300 hover:scale-105">
                                    <span className="flex items-center justify-center gap-2">
                                        Learn More
                                        <svg className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
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

export default AboutPage;

