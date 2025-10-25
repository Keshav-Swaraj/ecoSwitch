import React from 'react';
import { MonitorIcon, OptimizeIcon, LearnIcon, EngageIcon } from './Icons';

const features = [
  {
    icon: <MonitorIcon />,
    title: 'MONITOR',
    description: 'Visualize your complete energy footprint in real-time. See data from your home, fleet, or factory in one unified dashboard.',
  },
  {
    icon: <OptimizeIcon />,
    title: 'OPTIMIZE',
    description: 'Use our AI simulator to see how switching to cleaner fuels like LNG can instantly cut costs and emissions.',
  },
  {
    icon: <LearnIcon />,
    title: 'LEARN',
    description: 'Move from awareness to action. Get smart recommendations, access subsidy info, and explore safety guidelines.',
  },
  {
    icon: <EngageIcon />,
    title: 'ENGAGE',
    description: 'Join a community of responsible users, compete in Eco-Challenges, and share your positive impact.',
  },
];

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => {
  return (
    <div className="bg-[#2a211c]/80 p-6 rounded-2xl flex flex-col items-center text-center border border-amber-900/50">
      <div className="w-12 h-12 text-amber-400 mb-4">
        {icon}
      </div>
      <h3 className="font-poppins text-lg font-bold tracking-widest text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-300 text-xs leading-relaxed">
        {description}
      </p>
    </div>
  );
};


const Features: React.FC = () => {
  return (
    <section 
      id="features-section"
      className="absolute inset-0 flex items-center justify-center px-4"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="font-poppins text-3xl font-bold tracking-wider text-white uppercase">
            A Unified Energy C.O.R.E.
          </h2>
          <div className="mt-2 h-1 w-24 bg-amber-400 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;