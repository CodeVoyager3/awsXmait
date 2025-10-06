import React, { useState, useEffect, useRef } from 'react';

// Data for the events
const eventsData = [
    {
        title: "Chapter Inauguration",
        date: "September 25, 2025",
        status: "Completed",
        statusColor: "green",
        description: "The official launch of the AWS Academy MAIT Students Chapter. A landmark event celebrating the beginning of a new journey into cloud computing for MAIT students, attended by faculty and industry professionals.",
        image: "/img1.jpeg",
        action: { text: "View Gallery", page: "GalleryPage" }
    },
    {
        title: "Technical Department Recruitment",
        date: "October 7, 2025",
        status: "Deadline Approaching",
        statusColor: "red",
        description: "Round 1 of the recruitment process for the technical department. A task designed to assess design sense, creativity, and front-end development skills of aspiring members.",
        image: "/recruitment.jpg",
        action: { text: "View PDF", link: "./AWS_Technical_Round 1[1].pdf", external: true }
    }
];

// Reusable Event Card Component
const EventCard = ({ event, isVisible, delay, setPage }) => (
    <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl overflow-hidden transform transition-all duration-700 ease-out hover:scale-105 hover:border-orange-500/50 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${delay}ms` }}>
        <div className="relative">
            <img src={event.image} alt={event.title} className="w-full h-56 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <span className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full ${event.statusColor === 'green' ? 'bg-green-500/40 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                {event.status}
            </span>
        </div>
        <div className="p-6">
            <p className="text-sm text-gray-400 mb-2">{event.date}</p>
            <h3 className="text-2xl font-bold text-white mb-4">{event.title}</h3>
            <p className="text-gray-300 leading-relaxed mb-6">{event.description}</p>
            {event.action && (
                event.action.page ? (
                    <button 
                        onClick={() => {
                            setPage(event.action.page);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                        className="inline-flex cursor-pointer items-center gap-2 font-semibold text-orange-400 hover:text-orange-300 transition-colors"
                    >
                        {event.action.text}
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </button>
                ) : (
                    <a 
                        href={event.action.link}
                        target={event.action.external ? "_blank" : "_self"}
                        rel={event.action.external ? "noopener noreferrer" : ""}
                        className="inline-flex items-center gap-2 font-semibold cursor-pointer text-orange-400 hover:text-orange-300 transition-colors"
                    >
                        {event.action.text}
                        <svg className="w-4  h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                    </a>
                )
            )}
        </div>
    </div>
);

// Main Component for the Events Page
const EventsPage = ({ setPage }) => {
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
            id="events" 
            className="relative bg-gray-900 py-20 px-6 overflow-hidden min-h-screen"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-20 -right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
                <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-slow-delayed"></div>
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
            }}></div>

            <div className="relative max-w-7xl mx-auto">
                {/* Header section */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'}`}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4">
                        Chapter <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Events</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">Stay updated with our latest workshops, recruitment drives, and community meetups.</p>
                </div>

                {/* Events Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                    {eventsData.map((event, index) => (
                        <EventCard key={index} event={event} isVisible={isVisible} delay={index * 200} setPage={setPage} />
                    ))}
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

export default EventsPage;