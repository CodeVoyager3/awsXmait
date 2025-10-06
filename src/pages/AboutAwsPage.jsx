import React, { useState, useEffect, useRef } from 'react';

// Data for the page, extracted from aws.amazon.com/training/awsacademy
const awsAcademyData = {
    keyFacts: [
        { value: 'Free', label: 'For Institutions' },
        { value: '200+', label: 'Courses Available' },
        { value: 'Globally', label: 'Recognized' },
        { value: '50%', label: 'Certification Discount' }
    ],
    introduction: "AWS Academy provides higher education institutions with a free, ready-to-teach cloud computing curriculum that prepares students to pursue industry-recognized certifications and in-demand cloud jobs.",
    studentBenefits: [
        "Develop in-demand, real-world cloud skills.",
        "Gain hands-on experience with the AWS Cloud.",
        "Prepare for industry-recognized AWS Certification exams.",
        "Receive a 50% discount on AWS Certification exams."
    ],
    curriculumHighlights: [
        { icon: '🏗️', title: 'Cloud Foundations' },
        { icon: '💻', title: 'Cloud Developing' },
        { icon: '⚙️', title: 'Cloud Operations' },
        { icon: '🧠', title: 'Machine Learning' },
        { icon: '📊', title: 'Data Analytics' },
        { icon: '🛡️', title: 'Cloud Security' }
    ],
    howItWorks: [
        { icon: '🏫', name: 'Institution Joins' },
        { icon: '👨‍🏫', name: 'Educators Learn' },
        { icon: '🎓', name: 'Students Study' },
        { icon: '📜', name: 'Get Certified' }
    ]
};

// Main Component for the About AWS Page
const AboutAwsPage = () => {
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

    return (
        <section 
            ref={sectionRef}
            id="about-aws" 
            className="relative bg-gray-900 py-20 px-6 overflow-hidden"
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
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                    <img src="./awsLogo1.png" alt="AWS Logo" className="h-20 mx-auto mb-6" />
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                        AWS <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Academy</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">{awsAcademyData.introduction}</p>
                </div>

                {/* Key Facts Section */}
                <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                    {awsAcademyData.keyFacts.map((fact, index) => (
                        <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 text-center hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                            <div className="text-4xl font-bold text-orange-400 mb-2">{fact.value}</div>
                            <div className="text-sm text-gray-300">{fact.label}</div>
                        </div>
                    ))}
                </div>

                {/* Student Benefits and Curriculum Section */}
                <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
                    <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
                        <h3 className="text-3xl font-bold text-white mb-4">Benefits for Students</h3>
                        <ul className="space-y-3 text-gray-300">
                            {awsAcademyData.studentBenefits.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <svg className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                     <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                        <h3 className="text-3xl font-bold text-white mb-4">Curriculum Highlights</h3>
                        <div className="grid grid-cols-2 gap-4">
                            {awsAcademyData.curriculumHighlights.map((course, index) => (
                                <div 
                                    key={index} 
                                    className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 flex items-center gap-4 hover:border-orange-500/50 hover:bg-gray-800/70 transition-all duration-300 cursor-pointer"
                                >
                                    <div className="text-3xl bg-gray-900/50 p-3 rounded-lg group-hover:bg-orange-500/20 transition-colors duration-300">
                                        {course.icon}
                                    </div>
                                    <span className="font-semibold text-gray-200 group-hover:text-white transition-colors duration-300">
                                        {course.title}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* How It Works Section */}
                 <div className={`text-center mb-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h3 className="text-3xl font-bold text-white mb-8">How It Works</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {awsAcademyData.howItWorks.map((step, index) => (
                            <div key={index} className="group bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-800/50 hover:border-orange-500/50 transition-all duration-300 hover:scale-105">
                                <div className="text-5xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">{step.icon}</div>
                                <h4 className="text-white font-semibold text-lg">{step.name}</h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className={`text-center transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                     <a 
                        href="https://aws.amazon.com/training/awsacademy/"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-10 rounded-full overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
                    >
                        <span className="relative z-10">Learn More on AWS Academy</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
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

export default AboutAwsPage;
