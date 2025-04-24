import React, { useState } from 'react';
import { ProjectPhase, ProjectArtifact } from '../types';

interface PhaseCardProps {
  phase: ProjectPhase;
  isAlternate?: boolean;
}

const PhaseCard: React.FC<PhaseCardProps> = ({ phase, isAlternate = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div 
      id={phase.id}
      className={`flex flex-col ${isAlternate ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
    >
      <div className="md:w-1/2">
        {phase.image && (
          <img 
            src={phase.image} 
            alt={phase.title} 
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        )}
      </div>
      
      <div className="md:w-1/2">
        <div className={`bg-white rounded-lg p-8 shadow-sm border-l-4 ${
          phase.completed ? 'border-emerald-500' : 'border-amber-500'
        }`}>
          <div className="flex items-center mb-4">
            <div className={`w-4 h-4 rounded-full mr-3 ${
              phase.completed ? 'bg-emerald-500' : 'bg-amber-500'
            }`}></div>
            <h3 className="text-2xl font-bold text-gray-800">
              {phase.title}
            </h3>
          </div>
          
          <p className="text-gray-600 mb-6">{phase.description}</p>
          
          {phase.artifacts && phase.artifacts.length > 0 && (
            <>
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-emerald-600 hover:text-emerald-800 font-medium flex items-center mb-4"
              >
                {isExpanded ? 'Hide Artifacts' : 'View Artifacts'}
                <svg 
                  className={`w-4 h-4 ml-2 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              
              {isExpanded && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {phase.artifacts.map((artifact) => (
                    <ArtifactCard key={artifact.id} artifact={artifact} />
                  ))}
                </div>
              )}
            </>
          )}
          
          <div className="mt-6">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
              phase.completed 
                ? 'bg-emerald-100 text-emerald-800' 
                : 'bg-amber-100 text-amber-800'
            }`}>
              {phase.completed ? 'Completed' : 'In Progress'}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ArtifactCard: React.FC<{ artifact: ProjectArtifact }> = ({ artifact }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 hover:shadow-md transition duration-300">
      {artifact.previewImage && (
        <div className="mb-3 relative h-32 overflow-hidden rounded">
          <img 
            src={artifact.previewImage} 
            alt={artifact.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
            {artifact.type}
          </div>
        </div>
      )}
      
      <h4 className="text-lg font-medium text-gray-800 mb-1">{artifact.title}</h4>
      
      {artifact.description && (
        <p className="text-sm text-gray-600 mb-3">{artifact.description}</p>
      )}
      
      {artifact.url ? (
        <a 
          href={artifact.url} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-emerald-600 hover:text-emerald-800 text-sm font-medium"
        >
          View Artifact
          <svg 
            className="w-4 h-4 inline-block ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
          </svg>
        </a>
      ) : (
        <span className="text-gray-400 text-sm">Coming soon</span>
      )}
    </div>
  );
};

export default PhaseCard;