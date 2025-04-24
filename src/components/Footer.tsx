import React from 'react';

interface FooterProps {
  projectName: string;
  teamName: string;
}

const Footer: React.FC<FooterProps> = ({ projectName, teamName }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold text-emerald-400 mb-2">{projectName}</h3>
            <p className="text-gray-400">{teamName}</p>
          </div>
          
          <div>
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <a href="#hero" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#phases" className="text-gray-300 hover:text-white transition-colors">
                  Project Phases
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-300 hover:text-white transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} {teamName}. All rights reserved.</p>
          <p className="mt-2">
            Created for Human-Computer Interaction Design Project
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;