import React from 'react';
import { ProjectPhase } from '../types';
import PhaseCard from './PhaseCard';

interface ProjectPhasesProps {
  phases: ProjectPhase[];
}

const ProjectPhases: React.FC<ProjectPhasesProps> = ({ phases }) => {
  return (
    <section id="phases" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Project Development Process
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our journey from initial research to final implementation
          </p>
          <div className="w-20 h-1 bg-emerald-500 mx-auto mt-6"></div>
        </div>
        
        <div className="space-y-16">
          {phases.map((phase, index) => (
            <PhaseCard 
              key={phase.id} 
              phase={phase} 
              isAlternate={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectPhases;