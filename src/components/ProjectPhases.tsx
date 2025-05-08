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
            프로젝트 개발 과정
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
          초기 사용자 조사부터 최종 구현까지의 여정을 확인해보세요.<br />
          <span className="text-green-600 font-semibold">초록색</span>은 완료된 단계를, 
          <span className="text-orange-500 font-semibold">주황색</span>은 현재 진행 중인 단계를 나타냅니다.
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