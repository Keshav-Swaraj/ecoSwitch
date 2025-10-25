import React, { useState, useEffect } from 'react';
import { 
    IndividualIcon, IndustryIcon, CookingIcon, ApplianceIcon, BillIcon, EnergyMixIcon, UploadIcon 
} from '../components/Icons';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';

// --- Reusable UI Components ---

const Card: React.FC<{
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}> = ({ icon, title, children }) => (
  <div className="bg-[#2a211c]/80 border border-amber-900/50 rounded-2xl p-6 backdrop-blur-sm">
    <div className="flex items-center mb-4">
      <div className="w-8 h-8 mr-4 text-amber-400">{icon}</div>
      <h3 className="font-poppins text-xl font-bold text-white tracking-wider">{title}</h3>
    </div>
    <div>{children}</div>
  </div>
);

const RadioGroup: React.FC<{ options: string[]; name: string }> = ({ options, name }) => (
  <div className="grid grid-cols-2 gap-4">
    {options.map((option) => (
      <label key={option} className="flex items-center space-x-3 p-3 bg-black/40 rounded-md cursor-pointer border-2 border-amber-900/50 has-[:checked]:border-amber-500 has-[:checked]:bg-amber-900/50 transition-all">
        <input type="radio" name={name} value={option} className="hidden peer" />
        <span className="w-5 h-5 rounded-full border-2 border-amber-800 bg-black/50 peer-checked:bg-amber-500 peer-checked:border-amber-400 flex items-center justify-center transition-all">
           <span className="w-2 h-2 rounded-full bg-amber-900 peer-checked:bg-white"></span>
        </span>
        <span className="font-semibold text-gray-300 peer-checked:text-amber-200">{option}</span>
      </label>
    ))}
  </div>
);

const LabeledSlider: React.FC<{ label: string; min?: number; max?: number; value: number; onChange: (e: React.ChangeEvent<HTMLInputElement>) => void }> = ({ label, min = 0, max = 100, value, onChange }) => (
    <div>
        <div className="flex justify-between items-center mb-2">
            <label className="text-gray-300 font-semibold">{label}</label>
            <span className="font-poppins text-amber-400 font-bold text-lg drop-shadow-[0_0_4px_rgba(251,191,36,0.6)]">{label.includes('₹') ? `₹ ${value}` : `${value}%`}</span>
        </div>
        <input 
            type="range"
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            className="w-full h-2 bg-amber-900/50 rounded-lg appearance-none cursor-pointer range-lg focus:outline-none focus:ring-2 focus:ring-amber-500/50 slider-thumb"
            style={{
                '--slider-thumb-color': '#f59e0b',
                '--slider-track-color': '#92400e',
            } as React.CSSProperties}
        />
    </div>
);

const CustomNumberInput: React.FC<{ value: number; onChange: (newValue: number) => void; min?: number; max?: number; step?: number; }> = ({ value, onChange, min = 1, max = 99, step = 1 }) => {
    const handleIncrement = () => {
        onChange(Math.min(max, value + step));
    };
    const handleDecrement = () => {
        onChange(Math.max(min, value - step));
    };

    return (
        <div className="flex items-center justify-center space-x-2">
            <button type="button" onClick={handleDecrement} className="w-8 h-8 font-bold text-xl bg-amber-900/70 hover:bg-amber-800/90 rounded-md border border-amber-700/50 transition-colors">-</button>
            <input type="number" readOnly value={value} className="w-12 h-8 text-center bg-black/40 border-y border-amber-800 text-amber-300 font-bold appearance-none focus:outline-none" />
            <button type="button" onClick={handleIncrement} className="w-8 h-8 font-bold text-xl bg-amber-900/70 hover:bg-amber-800/90 rounded-md border border-amber-700/50 transition-colors">+</button>
        </div>
    );
};


// --- Forms ---
const applianceOptions = ['Refrigerator', 'AC', 'TV', 'Washing Machine', 'Microwave', 'Geyser'];
const initialAppliancesState = applianceOptions.reduce((acc, option) => {
    acc[option] = { checked: false, quantity: 1, avgHours: 1 };
    return acc;
}, {} as Record<string, { checked: boolean; quantity: number; avgHours: number; }>);


const IndividualsForm: React.FC = () => {
    const [bill, setBill] = useState(2500);
    const [appliances, setAppliances] = useState(initialAppliancesState);
    
    const handleNavigate = () => {
      window.location.hash = '#/dashboard';
    };

    const handleApplianceChange = (name: string, field: 'checked' | 'quantity' | 'avgHours', value: boolean | number) => {
        setAppliances(prev => ({
            ...prev,
            [name]: { ...prev[name], [field]: value }
        }));
    };

    return (
        <div className="space-y-6">
            <Card icon={<CookingIcon />} title="Primary Cooking Fuel">
                <RadioGroup name="cooking-fuel" options={['LPG', 'PNG', 'Induction', 'Electric']} />
            </Card>
            <Card icon={<ApplianceIcon />} title="Daily Appliances">
                <div className="space-y-4">
                    {Object.entries(appliances).map(([name, data]) => (
                         <div key={name}>
                            <label className="flex items-center space-x-3 p-3 bg-black/40 rounded-md cursor-pointer border-2 border-amber-900/50 has-[:checked]:border-amber-500 has-[:checked]:bg-amber-900/50 transition-all">
                                <input 
                                    type="checkbox" 
                                    checked={data.checked}
                                    onChange={(e) => handleApplianceChange(name, 'checked', e.target.checked)}
                                    className="hidden peer" />
                                <span className="w-5 h-5 rounded border-2 border-amber-800 bg-black/50 peer-checked:bg-amber-500 peer-checked:border-amber-400 flex items-center justify-center transition-all">
                                  <svg className="w-3 h-3 text-white hidden peer-checked:block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </span>
                                <span className="font-semibold text-gray-300 peer-checked:text-amber-200">{name}</span>
                            </label>
                            {data.checked && (
                                <div className="grid grid-cols-2 gap-4 mt-3 p-3 bg-black/20 rounded-b-md">
                                    <div className="text-center">
                                        <p className="text-sm font-semibold text-gray-400 mb-1">Quantity</p>
                                        <CustomNumberInput 
                                            value={data.quantity} 
                                            onChange={(val) => handleApplianceChange(name, 'quantity', val)}
                                        />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-semibold text-gray-400 mb-1">Avg. Hours/Day</p>
                                        <CustomNumberInput 
                                            value={data.avgHours} 
                                            onChange={(val) => handleApplianceChange(name, 'avgHours', val)}
                                            max={24}
                                        />
                                    </div>
                                </div>
                            )}
                         </div>
                    ))}
                </div>
            </Card>
            <Card icon={<BillIcon />} title="Average Monthly Energy Bill">
                <LabeledSlider label="Bill Amount (₹)" min={500} max={15000} value={bill} onChange={(e) => setBill(Number(e.target.value))} />
            </Card>
             <button onClick={handleNavigate} className="font-poppins w-full py-4 text-xl font-bold bg-amber-800/80 backdrop-blur-sm border border-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all transform hover:scale-[1.02] shadow-[0_0_10px_rgba(217,119,6,0.8)]">
                Generate My Home Dashboard ⚡
            </button>
        </div>
    );
};

const IndustryForm: React.FC = () => {
    const [energyMix, setEnergyMix] = useState({ electricity: 60, gas: 30, diesel: 10 });
    
    const handleNavigate = () => {
      window.location.hash = '#/dashboard';
    };

    return (
        <div className="space-y-6">
            <Card icon={<EnergyMixIcon />} title="Energy Mix">
                <div className="space-y-4">
                    <LabeledSlider label="Electricity" value={energyMix.electricity} onChange={(e) => setEnergyMix({...energyMix, electricity: Number(e.target.value)})} />
{/* Fix: Corrected typo in variable name `energy_mix` to `energyMix`. */}
                    <LabeledSlider label="Natural Gas" value={energyMix.gas} onChange={(e) => setEnergyMix({...energyMix, gas: Number(e.target.value)})} />
                    <LabeledSlider label="Diesel" value={energyMix.diesel} onChange={(e) => setEnergyMix({...energyMix, diesel: Number(e.target.value)})} />
                </div>
            </Card>
            <Card icon={<UploadIcon />} title="Upload Energy Logs">
                <label className="flex flex-col items-center justify-center w-full h-32 px-4 transition bg-black/40 border-2 border-amber-800/50 border-dashed rounded-md appearance-none cursor-pointer hover:border-amber-500 focus:outline-none">
                    <span className="flex items-center space-x-2">
                        <div className="w-8 h-8 text-amber-600"><UploadIcon /></div>
                        <span className="font-medium text-gray-400">
                            Drop files to attach, or <span className="text-amber-400 underline">browse</span>
                        </span>
                    </span>
                    <input type="file" name="file_upload" className="hidden" />
                </label>
            </Card>
            <button onClick={handleNavigate} className="font-poppins w-full py-4 text-xl font-bold bg-amber-800/80 backdrop-blur-sm border border-amber-600 text-white rounded-lg hover:bg-amber-700 transition-all transform hover:scale-[1.02] shadow-[0_0_10px_rgba(217,119,6,0.8)]">
                Generate Industrial Dashboard ⚙️
            </button>
        </div>
    );
}

// --- Main Page Component ---

interface TrackPageProps {
    initialTrack: string;
}

const TrackPage: React.FC<TrackPageProps> = ({ initialTrack }) => {
  const [activeTrack, setActiveTrack] = useState(initialTrack);

  useEffect(() => {
    setActiveTrack(initialTrack);
  }, [initialTrack]);

  const setTrack = (track: string) => {
    window.location.hash = `#/track/${track}`;
  };

  const TabButton: React.FC<{track: string, label: string, icon: React.ReactNode}> = ({track, label, icon}) => {
    const isActive = activeTrack === track;
    return (
        <button 
            onClick={() => setTrack(track)}
            className={`font-poppins flex items-center justify-center px-6 py-3 text-lg font-bold rounded-md transition-all w-1/2 ${
                isActive 
                    ? 'bg-amber-800/80 text-white shadow-[0_0_10px_rgba(217,119,6,0.8)] border border-amber-600' 
                    : 'bg-transparent text-gray-400 hover:bg-black/20 hover:text-amber-400'
            }`}
        >
            <div className="w-6 h-6 mr-2">{icon}</div>
            {label}
        </button>
    )
  }

  return (
    <div className="w-full min-h-screen text-white bg-black">
      {/* Layer 1: Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/do2bp6ryt/video/upload/v1761332572/Video_Generation_with_Rightward_Movement_1_y81nr0.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Layer 2: Dark Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      
      {/* Layer 3: Content */}
      <div className="relative z-20">
        <Header />
        <LeftSidebar />
        <RightSidebar />
        
        <main className="min-h-screen flex items-center justify-center pt-32 pb-16">
            <div className="max-w-4xl mx-auto w-full px-4">
                <button 
                  onClick={() => window.location.hash = '#'} 
                  className="absolute top-28 left-4 sm:left-8 text-amber-400 hover:text-white transition-colors text-sm font-bold tracking-wider"
                >
                    &larr; BACK TO HOME
                </button>
                <header className="text-center my-8">
                    <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
                        Setup Your <span className="text-amber-400">EcoSwitch</span> Track
                    </h1>
                    <p className="mt-4 text-white/70 text-lg">Provide some initial data to generate your personalized dashboard.</p>
                </header>

                <nav className="flex justify-center mb-10 bg-black/40 backdrop-blur-sm p-2 rounded-xl border border-amber-700/30">
                    <TabButton track="individuals" label="Individuals" icon={<IndividualIcon />} />
                    <TabButton track="industry" label="Industry" icon={<IndustryIcon />} />
                </nav>

                <div className="mt-8">
                    {activeTrack === 'individuals' && <IndividualsForm />}
                    {activeTrack === 'industry' && <IndustryForm />}
                </div>
            </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default TrackPage;