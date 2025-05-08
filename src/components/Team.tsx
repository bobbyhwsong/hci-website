import React from 'react';
import { TeamMember } from '../types';
import logoImage from '../assets/images/비정형싱킹_로고.png';

interface TeamProps {
  teamName: string;
  members: TeamMember[];
}

const Team: React.FC<TeamProps> = ({ teamName, members }) => {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-6">
            <img 
              src={logoImage} 
              alt="Team Logo" 
              className="h-12 w-auto"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
              Meet the Team
            </h2>
          </div>
          <p className="text-xl text-gray-600">{teamName}</p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div 
              key={member.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {member.image && (
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-64 object-cover object-center"
                />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-medium mb-3">{member.role}</p>
                {member.bio && <p className="text-gray-600 text-sm">{member.bio}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;