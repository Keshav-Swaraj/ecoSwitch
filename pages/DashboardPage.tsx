import React, { useState } from 'react';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';
import { LightningIcon, EcoScoreIcon, WindIcon, BillIcon, SolarIcon, LngIcon } from '../components/Icons';

// --- Data & Types (Updated with "Glowy Brown" Theme Colors) ---
const breakdownData = [
  { name: 'ACs', value: 40, color: 'text-red-500', bgColor: 'bg-red-500' },
  { name: 'Fridge', value: 15, color: 'text-orange-500', bgColor: 'bg-orange-500' },
  { name: 'Light', value: 20, color: 'text-amber-400', bgColor: 'bg-amber-400' },
  { name: 'Fans', value: 25, color: 'text-yellow-500', bgColor: 'bg-yellow-500' },
];

const ecoScore = 58;

// --- SVG Chart Components ---

const DonutChart: React.FC<{ data: typeof breakdownData }> = ({ data }) => {
  const size = 180;
  const strokeWidth = 25;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  let accumulatedPercentage = 0;

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        {data.map((item, index) => {
          const dashoffset = circumference * (1 - (item.value / 100));
          const rotation = accumulatedPercentage * 3.6;
          accumulatedPercentage += item.value;
          
          // Calculate segment length
          const dashArray = (circumference * item.value / 100);

          return (
            <circle
              key={index}
              className={`${item.color}`}
              cx={size / 2}
              cy={size / 2}
              r={radius}
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeDasharray={`${dashArray} ${circumference - dashArray}`}
              strokeDashoffset={-accumulatedPercentage * circumference / 100 + dashArray}
              fill="transparent"
            />
          );
        })}
      </svg>
      <div className="absolute flex flex-col items-center justify-center">
        <ul className="text-xs text-white/80 list-none p-0 m-0">
          {breakdownData.map(item => (
            <li key={item.name} className="flex items-center my-1">
               <span className={`w-2 h-2 rounded-full mr-2 ${item.bgColor}`}></span>{item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const EcoScoreRing: React.FC<{ score: number }> = ({ score }) => {
  const size = 120;
  const strokeWidth = 12;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = score / 100;
  const dashoffset = circumference * (1 - progress);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="-rotate-90">
        <circle
          className="text-amber-900/50"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          className="text-amber-400"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          fill="transparent"
          style={{ transition: 'stroke-dashoffset 1.5s ease-out' }}
        />
      </svg>
      <div className="absolute text-amber-300 w-10 h-10">
        <LightningIcon />
      </div>
    </div>
  );
};

// --- Dashboard Card Components ---

const BreakdownCard: React.FC = () => (
    <div className="bg-[#2a211c]/80 p-4 rounded-xl border border-amber-900/50">
        <h3 className="font-poppins text-lg font-bold text-white/90 tracking-wide mb-2">Energy Breakdown</h3>
        <div className="h-56 my-4"><DonutChart data={breakdownData} /></div>
        <div className="space-y-3 px-2">
            {breakdownData.map(item => (
                <div key={item.name} className="w-full">
                    <div className="flex justify-between text-xs text-white/80 mb-1">
                        <span>{item.name}</span>
                        <span>{item.value}%</span>
                    </div>
                    <div className="w-full bg-amber-900/50 rounded-full h-2">
                        <div className={`${item.bgColor} h-2 rounded-full`} style={{width: `${item.value}%`}}></div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

const UsageCard: React.FC<{icon: React.ReactNode, label: string, value: string}> = ({icon, label, value}) => (
    <div className="flex items-center bg-[#2a211c]/80 rounded-lg p-3 border border-amber-900/50">
        <div className={`w-10 h-10 rounded-md flex items-center justify-center mr-4 bg-amber-900/50`}>
           {icon}
        </div>
        <div className="text-gray-200">
            <p className="font-semibold text-sm text-white/80">{label}</p>
            <p className="font-poppins font-bold text-lg text-amber-300">{value}</p>
        </div>
    </div>
);


const EcoScoreCard: React.FC = () => (
    <div className="bg-[#2a211c]/80 p-4 rounded-xl border border-amber-900/50 flex items-center">
        <div>
            <div className="flex items-center text-xs text-amber-300 mb-1">
                <EcoScoreIcon className="w-4 h-4 mr-1" />
                <span>Your EcoScore</span>
            </div>
            <p className="font-poppins text-5xl font-bold text-white">{ecoScore}</p>
            <p className="text-white/80 text-sm">out of 100 <span className="font-bold text-amber-400">Good</span></p>
            <p className="text-xs text-white/60 mt-2 max-w-[150px]">Based on your home appliances and energy consumption patterns</p>
        </div>
        <div className="w-32 h-32 ml-auto"><EcoScoreRing score={ecoScore} /></div>
    </div>
);

// --- NEW ADDITIVE COMPONENT (UPGRADED) ---
const EcoSwitchComparison: React.FC = () => {
  const [activeSim, setActiveSim] = useState<string | null>(null);

  const baselineData = {
    cost: 4250,
    energy: 1340,
    co2: 1.2
  };

  const simulationData: { [key: string]: { cost: number; energy: number; co2: number; trees: number; } } = {
    solar: { cost: 3000, energy: 1050, co2: 0.9, trees: 4 },
    wind: { cost: 3270, energy: 1150, co2: 1.0, trees: 3 },
    lng: { cost: 3550, energy: 1200, co2: 1.1, trees: 2 },
  };

  const handleSimClick = (sim: string) => {
    setActiveSim(prev => (prev === sim ? null : sim));
  };

  const currentSimData = activeSim ? simulationData[activeSim] : null;

  const SimButton: React.FC<{sim: string, label: string, emoji: string}> = ({ sim, label, emoji }) => {
    const isActive = activeSim === sim;
    return (
      <button 
        onClick={() => handleSimClick(sim)}
        className={`font-semibold text-sm py-2 px-4 rounded-full transition-all duration-300 flex items-center border ${
          isActive 
            ? 'bg-amber-400 text-black border-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]' 
            : 'bg-amber-900/50 text-amber-200/80 border-amber-800/70 hover:bg-amber-800/80 hover:text-white'
        }`}
      >
        {label} <span className="ml-2">{emoji}</span>
      </button>
    );
  };
  
  const ComparisonGraph: React.FC<{ simulated: typeof simulationData.solar }> = ({ simulated }) => {
    const metrics = [
      { label: 'Monthly Cost', unit: '₹', baseline: baselineData.cost, simulated: simulated.cost, max: 5000 },
      { label: 'Energy Use', unit: 'kWh', baseline: baselineData.energy, simulated: simulated.energy, max: 1500 },
      { label: 'CO2 Emission', unit: 'tons', baseline: baselineData.co2, simulated: simulated.co2, max: 1.5 },
    ];

    return (
        <div className="space-y-4">
            {metrics.map(metric => (
                <div key={metric.label}>
                    <p className="text-xs text-white/70 font-semibold mb-1">{metric.label}</p>
                    <div className="space-y-1.5">
                        <div className="flex items-center">
                            <span className="w-16 text-right text-xs text-white/60 mr-2">Current:</span>
                            <div className="flex-1 bg-gray-700/50 rounded-full h-4">
                                <div className="bg-gray-500 h-4 rounded-full" style={{ width: `${(metric.baseline / metric.max) * 100}%` }}></div>
                            </div>
                             <span className="w-16 text-left text-xs text-white/80 ml-2 font-bold">{metric.baseline} {metric.unit}</span>
                        </div>
                        <div className="flex items-center">
                             <span className="w-16 text-right text-xs text-amber-300/80 mr-2">Simulated:</span>
                            <div className="flex-1 bg-amber-900/50 rounded-full h-4">
                                <div className="bg-amber-500 h-4 rounded-full" style={{ width: `${(metric.simulated / metric.max) * 100}%` }}></div>
                            </div>
                            <span className="w-16 text-left text-xs text-amber-200 ml-2 font-bold">{metric.simulated} {metric.unit}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
  };

  return (
    <div className="bg-[#2a211c]/80 p-6 rounded-xl border border-amber-900/50">
      <h3 className="font-poppins text-lg font-bold text-white/90 tracking-wide">EcoSwitch Comparison</h3>
      <p className="text-xs text-white/60 mb-4">See how clean energy could impact your profile.</p>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <SimButton sim="solar" label="Compare Solar" emoji="☀️" />
        <SimButton sim="wind" label="Compare Wind" emoji="💨" />
        <SimButton sim="lng" label="Compare LNG" emoji="💧" />
      </div>

      {currentSimData && (
        <div className="transition-opacity duration-500 animate-fade-in">
          <div className="grid grid-cols-3 gap-4 mb-6 text-center">
             <div>
                <p className="text-xs text-amber-300/80 font-semibold tracking-wide">SAVINGS</p>
                <p className="font-poppins font-bold text-xl text-white">₹{baselineData.cost - currentSimData.cost}</p>
            </div>
             <div>
                <p className="text-xs text-amber-300/80 font-semibold tracking-wide">ENERGY REDUCTION</p>
                <p className="font-poppins font-bold text-xl text-white">{baselineData.energy - currentSimData.energy} kWh</p>
            </div>
             <div>
                <p className="text-xs text-amber-300/80 font-semibold tracking-wide">CO2 REDUCTION</p>
                <p className="font-poppins font-bold text-xl text-white">{(baselineData.co2 - currentSimData.co2).toFixed(1)} tons</p>
            </div>
          </div>
          
          <div className="bg-black/30 p-4 rounded-lg border border-amber-900/40">
            <ComparisonGraph simulated={currentSimData} />
          </div>
          
          <div className="bg-amber-900/50 p-3 rounded-md flex items-center mt-4">
            <span className="text-2xl mr-3">🌱</span>
            <p className="font-semibold text-amber-200 text-sm">This switch could save <span className="font-bold text-white">{currentSimData.trees} trees</span> per month!</p>
          </div>
        </div>
      )}
      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};


// --- Main Page Component ---

const DashboardPage: React.FC = () => {
    return (
    <div className="w-full min-h-screen text-white bg-black">
        <video autoPlay loop muted playsInline className="fixed top-0 left-0 w-full h-full object-cover z-0">
            <source src="https://res.cloudinary.com/do2bp6ryt/video/upload/v1761332572/Video_Generation_with_Rightward_Movement_1_y81nr0.mp4" type="video/mp4" />
        </video>
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10"></div>
        <div className="relative z-20">
            <Header />
            <LeftSidebar />
            <RightSidebar />
            <main className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16">
                
                <div className="text-center mb-8">
                    <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] flex items-center justify-center">
                        <LightningIcon className="w-10 h-10 mr-3 text-amber-400" />
                        Personalized Energy Profile
                    </h1>
                </div>

                <div className="w-full max-w-5xl mx-auto p-4 md:p-6 bg-black/30 backdrop-blur-xl rounded-3xl border-2 border-amber-800/50 shadow-2xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Left Column */}
                        <div>
                            <BreakdownCard />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-4">
                            <UsageCard icon={<LightningIcon className="w-6 h-6 text-amber-400"/>} label="Total Energy Usage" value="1340 kwh" />
                            <UsageCard icon={<WindIcon className="w-6 h-6 text-amber-400"/>} label="CO2 Emission" value="1.2 tons" />
                            <UsageCard icon={<BillIcon className="w-6 h-6 text-amber-400"/>} label="Estimated Monthly Cost" value="₹ 4,250" />
                            <EcoScoreCard />
                        </div>
                    </div>
                    <div className="mt-6">
                      <EcoSwitchComparison />
                    </div>
                </div>

            </main>
            <Footer />
        </div>
    </div>
    );
};

export default DashboardPage;