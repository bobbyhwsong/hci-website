import React from 'react';

interface PrototypeViewerProps {
  title: string;
  description: string;
  embedUrl: string;
  instructions: string[];
}

const PrototypeViewer: React.FC<PrototypeViewerProps> = ({
  title,
  description,
  embedUrl,
  instructions
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      
      <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src={embedUrl}
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          title={title}
        ></iframe>
      </div>
      
      <div className="p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-3">How to Use This Prototype</h4>
        <ul className="space-y-2">
          {instructions.map((instruction, index) => (
            <li key={index} className="flex items-start">
              <span className="flex-shrink-0 w-6 h-6 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mr-2 mt-0.5">
                {index + 1}
              </span>
              <span className="text-gray-600">{instruction}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PrototypeViewer;