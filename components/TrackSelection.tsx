import React from 'react';

const TrackSelection: React.FC = () => {
  const handleNavigate = (path: string) => {
    window.location.hash = path;
  };

  return (
    <section 
      id="track-section"
      className="absolute inset-0 flex items-center justify-center px-4"
    >
      <div className="text-center">
        <h2 className="font-poppins text-3xl font-bold tracking-wider text-white uppercase">
          Select Your EcoSwitch Track
        </h2>
        <div className="mt-2 h-1 w-24 bg-amber-400 mx-auto mb-12"></div>
        
        <div className="flex flex-col md:flex-row gap-8">
          <button 
            onClick={() => handleNavigate('#/track/individuals')} 
            className="font-poppins text-2xl font-bold tracking-widest bg-amber-800/80 backdrop-blur-sm border-2 border-amber-600 text-white py-6 px-16 rounded-lg hover:bg-amber-700 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(217,119,6,0.8)] text-center cursor-pointer"
          >
            INDIVIDUALS
          </button>
          <button 
            onClick={() => handleNavigate('#/track/industry')}
            className="font-poppins text-2xl font-bold tracking-widest bg-amber-800/80 backdrop-blur-sm border-2 border-amber-600 text-white py-6 px-16 rounded-lg hover:bg-amber-700 hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(217,119,6,0.8)] text-center cursor-pointer"
          >
            INDUSTRY
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrackSelection;