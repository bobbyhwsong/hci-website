import React from 'react';
import logoImage from '../assets/images/비정형싱킹_로고.png';

interface HeroProps {
  title: string;
  tagline: string;
  description: string;
}

const Hero: React.FC<HeroProps> = ({ title, tagline, description }) => {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-800 to-teal-900 text-white"
    >
      <div 
        className="absolute inset-0 bg-black opacity-50"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1295138/pexels-photo-1295138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-8 animate-fadeIn">
          <img 
            src={logoImage} 
            alt="Team Logo" 
            className="h-24 w-auto mx-auto mb-6"
          />
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fadeIn">
          {title}
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 text-emerald-200">
          {tagline}
        </p>
        <div className="max-w-2xl mx-auto">
          <p className="text-base md:text-lg mb-8 leading-relaxed opacity-90">
            {description}
          </p>
        </div>
        <div className="space-x-4">
          <a 
            href="#phases" 
            className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            Explore Project
          </a>
          <a 
            href="#team" 
            className="inline-block bg-transparent hover:bg-white/10 text-white font-semibold py-3 px-6 rounded-lg border border-white transition-colors duration-300"
          >
            Meet the Team
          </a>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 text-center">
        <a 
          href="#phases" 
          className="inline-block animate-bounce"
          aria-label="Scroll down"
        >
          <svg 
            className="w-8 h-8 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            ></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;