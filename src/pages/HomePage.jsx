import React, { useState, useEffect } from 'react';

const HomePage = ({ setPage }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { number: '86th', label: 'NIRF Ranking 2024', subtext: 'Among Engineering Colleges' },
    { number: '200+', label: 'AWS Services', subtext: 'Available for Learning' },
    { number: '1999', label: 'MAIT Established', subtext: 'Excellence Since' },
    { number: 'NBA', label: 'Accredited', subtext: 'Quality Education' }
  ];

  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: 'AWS Educate Access',
      description: 'Free cloud training & AWS credits'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: 'Industry Curriculum',
      description: 'AWS Academy certified courses'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: 'AWS Certifications',
      description: 'Industry-recognized credentials'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Career Pathways',
      description: 'Direct path to cloud careers'
    }
  ];

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-bg">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
      </div>

      {/* Floating orbs for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        ></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-6 py-20">
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Logo section with stagger animation */}
          <div className="flex justify-center items-center gap-8 mb-12">
            <div className={`transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl group-hover:bg-orange-500/30 transition-all duration-300"></div>
                <img 
                  src="awsLogo1.png" 
                  alt="AWS Logo" 
                  className="relative h-20 w-20 md:h-28 md:w-28 rounded-full object-contain bg-white p-3 shadow-2xl ring-2 ring-orange-500/20 group-hover:ring-orange-500/40 transition-all duration-300 group-hover:scale-105" 
                />
              </div>
            </div>
            
            <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-400 to-transparent"></div>
            </div>
            
            <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
                <img 
                  src="Mait_Logo.png" 
                  alt="MAIT Logo" 
                  className="relative h-20 w-20 md:h-28 md:w-28 rounded-full object-contain bg-white p-3 shadow-2xl ring-2 ring-blue-500/20 group-hover:ring-blue-500/40 transition-all duration-300 group-hover:scale-105" 
                />
              </div>
            </div>
          </div>

          
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="text-white">Building the Future of </span>
            <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent animate-gradient">
              Cloud
            </span>
            <br />
            <span className="text-white">at MAIT</span>
          </h1>

          
          <p className={`text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            The official AWS Cloud Club empowering students with hands-on cloud computing skills, industry certifications, and career-ready training.
          </p>

          
          <div className={`transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <button 
              onClick={() => setPage('about')} 
              className="group relative bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold py-4 px-10 rounded-full overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all duration-300"
            >
              <span className="relative z-10 flex cursor-pointer items-center gap-2">
                Learn More
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`relative z-10 pb-16 px-6 transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 text-center hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2 group-hover:text-orange-400 transition-colors">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1 text-sm md:text-base">{stat.label}</div>
                <div className="text-gray-400 text-xs">{stat.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className={`relative z-10 pb-20 px-6 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join <span className="text-orange-500">AWS Cloud Club</span>?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Access world-class resources and opportunities designed to accelerate your cloud computing journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-gray-900/40 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                <div className="inline-flex p-3 rounded-xl bg-orange-500/10 text-orange-500 mb-4 group-hover:bg-orange-500/20 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Scoped styles */}
      <style>{`
        .hero-bg {
          background: linear-gradient(-45deg, #0f1419, #1a202c, #2d3748, #1e293b);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
        }
        
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 8s ease-in-out infinite;
          animation-delay: 1s;
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient-shift 3s linear infinite;
        }
        
        @media (max-width: 768px) {
          .hero-bg {
            animation: gradient 10s ease infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default HomePage;

