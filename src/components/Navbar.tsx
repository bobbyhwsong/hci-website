import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X } from 'lucide-react';
import logoImage from '../assets/images/비정형싱킹_로고.png';

interface NavbarProps {
  projectName: string;
  items: NavItem[];
}

const Navbar: React.FC<NavbarProps> = ({ projectName, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className={`flex items-center space-x-3 transition-colors ${
              scrolled ? 'text-emerald-600' : 'text-white'
            }`}
          >
            <img 
              src={logoImage} 
              alt="Team Logo" 
              className="h-8 w-auto"
            />
            <span className="text-xl font-bold">{projectName}</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {items.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`transition-colors hover:text-emerald-500 ${
                  scrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className={scrolled ? 'text-gray-800' : 'text-white'} size={24} />
            ) : (
              <Menu className={scrolled ? 'text-gray-800' : 'text-white'} size={24} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="text-gray-700 hover:text-emerald-500"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;