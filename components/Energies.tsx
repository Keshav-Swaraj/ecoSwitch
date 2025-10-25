import React from 'react';
import { LngIcon, PngIcon, SolarIcon, WindIcon, CbgIcon } from './Icons';

const energySources = [
  {
    icon: <LngIcon />,
    title: 'LNG',
    description: 'Liquefied Natural Gas is a cleaner, efficient fuel for heavy transport and industrial use, reducing emissions significantly.',
  },
  {
    icon: <PngIcon />,
    title: 'PNG',
    description: 'Piped Natural Gas offers a continuous and reliable energy supply for households and commercial establishments.',
  },
  {
    icon: <SolarIcon />,
    title: 'SOLAR',
    description: 'Harnessing the power of the sun to generate clean electricity, reducing carbon footprint for homes and businesses.',
  },
  {
    icon: <WindIcon />,
    title: 'WIND',
    description: 'Converting kinetic energy from wind into electrical power, a key source of renewable energy for a sustainable future.',
  },
  {
    icon: <CbgIcon />,
    title: 'CBG',
    description: 'Compressed Bio-Gas is a renewable automotive fuel derived from organic waste, promoting a circular economy.',
  },
];

const EnergyCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#2a211c]/80 p-5 rounded-xl flex flex-col items-center text-center border border-amber-900/50">
      <div className="w-10 h-10 text-amber-400 mb-3">
        {icon}
      </div>
      <h3 className="font-poppins text-md font-bold tracking-widest text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-300 text-xs leading-relaxed">
        {description}
      </p>
    </div>
  );
};

const Energies: React.FC = () => {
  return (
    <section 
      id="energies-section"
      className="absolute inset-0 flex items-center justify-center px-4"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="font-poppins text-3xl font-bold tracking-wider text-white uppercase">
            Cleaner Energy Sources
          </h2>
          <div className="mt-2 h-1 w-24 bg-amber-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {energySources.map((energy, index) => (
            <EnergyCard
              key={index}
              icon={energy.icon}
              title={energy.title}
              description={energy.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Energies;