import React, { useState } from 'react';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import ProvidersMapSidebar from '../components/ProvidersMapSidebar';
import Footer from '../components/Footer';
import { SolarIcon, WindIcon, LngIcon, PngIcon, CbgIcon, SearchIcon, LocationIcon, ProvidersIcon } from '../components/Icons';

// Mock Data
const providersData = [
  { name: 'SunPower Energy', type: 'Solar', rating: 4.8, location: 'Mumbai, MH', icon: <SolarIcon /> },
  { name: 'WindFlow Renewables', type: 'Wind', rating: 4.6, location: 'Chennai, TN', icon: <WindIcon /> },
  { name: 'GasLink Solutions', type: 'LNG', rating: 4.9, location: 'Dahej, GJ', icon: <LngIcon /> },
  { name: 'CityGas Pipelines', type: 'PNG', rating: 4.7, location: 'Delhi, DL', icon: <PngIcon /> },
  { name: 'BioFuel Innovations', type: 'CBG', rating: 4.5, location: 'Pune, MH', icon: <CbgIcon /> },
  { name: 'Aura Solar', type: 'Solar', rating: 4.7, location: 'Bengaluru, KA', icon: <SolarIcon /> },
  { name: 'GaleForce Turbines', type: 'Wind', rating: 4.4, location: 'Kanyakumari, TN', icon: <WindIcon /> },
  { name: 'CryoGas Inc.', type: 'LNG', rating: 4.8, location: 'Kochi, KL', icon: <LngIcon /> },
];

const energyTypes = [
    { label: 'All', icon: null },
    { label: 'Solar', icon: <SolarIcon /> },
    { label: 'Wind', icon: <WindIcon /> },
    { label: 'LNG', icon: <LngIcon /> },
    { label: 'PNG', icon: <PngIcon /> },
    { label: 'CBG', icon: <CbgIcon /> },
];

const ProviderCard: React.FC<typeof providersData[0]> = ({ name, type, rating, location, icon }) => (
    <div className="bg-[#2a211c]/80 border border-amber-900/50 rounded-2xl p-6 backdrop-blur-sm flex flex-col hover:border-amber-500 hover:scale-[1.02] transition-all duration-300">
        <div className="flex items-start mb-4">
            <div className="w-12 h-12 p-2 mr-4 text-amber-400 bg-black/30 rounded-lg">{icon}</div>
            <div>
                <h3 className="font-poppins text-lg font-bold text-white tracking-wider">{name}</h3>
                <p className="text-sm text-amber-300/80 font-semibold">{type} Energy</p>
            </div>
        </div>
        <div className="mt-auto pt-4 border-t border-amber-900/40 flex justify-between items-center text-sm">
            <div className="flex items-center text-white/70">
                <LocationIcon />
                <span className="ml-2">{location}</span>
            </div>
            <div className="flex items-center text-amber-400 font-bold">
                <span className="text-lg mr-1">★</span>
                <span>{rating}</span>
            </div>
        </div>
        <button className="w-full mt-4 font-poppins bg-amber-800/80 backdrop-blur-sm border border-amber-600 text-white font-bold py-2 px-4 rounded-md hover:bg-amber-700 transition-all duration-300">
            Contact Provider
        </button>
    </div>
);


const ProvidersPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProviders = providersData
        .filter(provider => activeFilter === 'All' || provider.type === activeFilter)
        .filter(provider => 
            provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            provider.location.toLowerCase().includes(searchTerm.toLowerCase())
        );

    return (
        <div className="w-full min-h-screen text-white bg-black">
            <video autoPlay loop muted playsInline className="fixed top-0 left-0 w-full h-full object-cover z-0">
                <source src="https://res.cloudinary.com/do2bp6ryt/video/upload/v1761332572/Video_Generation_with_Rightward_Movement_1_y81nr0.mp4" type="video/mp4" />
            </video>
            <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10"></div>
            <div className="relative z-20">
                <Header />
                <LeftSidebar />
                <main className="min-h-screen flex flex-col items-center justify-center pt-32 pb-16">
                    
                    <div className="text-center mb-8">
                        <h1 className="font-poppins text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-wide drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] flex items-center justify-center">
                            <ProvidersIcon />
                            <span className="ml-4">Find Clean Energy Providers</span>
                        </h1>
                        <p className="mt-4 text-white/70 text-lg max-w-2xl">Connect with certified providers for your home or industry.</p>
                    </div>

                    <div className="w-full max-w-6xl mx-auto p-4 md:p-6 space-y-8">
                        {/* Search and Filter */}
                        <div className="bg-black/40 backdrop-blur-sm p-4 rounded-xl border border-amber-700/30">
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="flex-1 relative">
                                    <input 
                                        type="text"
                                        placeholder="Search by name or location..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-black/40 p-3 pl-10 rounded-lg border-2 border-amber-800/60 focus:border-amber-500 focus:outline-none transition-colors"
                                    />
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-amber-500 w-5 h-5"><SearchIcon /></div>
                                </div>
                                <div className="flex items-center justify-center gap-2 flex-wrap">
                                    {energyTypes.map(type => (
                                        <button 
                                            key={type.label}
                                            onClick={() => setActiveFilter(type.label)}
                                            className={`font-semibold text-sm py-2 px-4 rounded-full transition-all duration-300 flex items-center border ${
                                                activeFilter === type.label
                                                ? 'bg-amber-400 text-black border-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.6)]' 
                                                : 'bg-amber-900/50 text-amber-200/80 border-amber-800/70 hover:bg-amber-800/80 hover:text-white'
                                            }`}
                                        >
                                            {type.icon && <div className="w-4 h-4 mr-2">{type.icon}</div>}
                                            {type.label}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Two Column Layout */}
                        <div className="flex flex-col lg:flex-row gap-6">
                            {/* Left Column - Provider List */}
                            <div className="lg:w-2/3">
                                <div className="grid md:grid-cols-2 gap-6">
                                    {filteredProviders.length > 0 ? (
                                        filteredProviders.map((provider, index) => (
                                            <ProviderCard key={index} {...provider} />
                                        ))
                                    ) : (
                                        <p className="col-span-full text-center text-white/70 py-12">No providers found. Try adjusting your search or filters.</p>
                                    )}
                                </div>
                            </div>
                            
                            {/* Right Column - Map */}
                            <div className="lg:w-1/3 sticky top-32">
                                <ProvidersMapSidebar />
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default ProvidersPage;
