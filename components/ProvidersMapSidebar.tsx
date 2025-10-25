import React from 'react';

const ProvidersMapSidebar: React.FC = () => {
  return (
    <div className="w-full h-full bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-amber-700/30">
      <h3 className="text-amber-400 font-bold mb-3 text-lg">Provider Locations</h3>
      <div className="w-full">
        <img 
          src="https://res.cloudinary.com/do2bp6ryt/image/upload/v1761361394/Screenshot_2025-10-25_083210_cogsaa.png" 
          alt="Provider Map" 
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProvidersMapSidebar;