import React from 'react';
import { HomeIcon, AboutUsIcon, TrackIcon, AwarenessIcon, ProvidersIcon } from './Icons';

const navItems = [
  { icon: <HomeIcon />, label: 'HOME', hash: '#' },
  { icon: <AboutUsIcon />, label: 'ABOUT US', hash: '#/about' },
  { icon: <TrackIcon />, label: 'TRACK', hash: '#' },
  { icon: <AwarenessIcon />, label: 'AWARENESS', hash: '#/awareness' },
  { icon: <ProvidersIcon />, label: 'PROVIDERS', hash: '#/providers' },
];

const LeftSidebar: React.FC = () => {
  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    // Prevent default for non-functional links, but allow it for functional ones
    if (hash === '#') {
       e.preventDefault();
    }
    window.location.hash = hash;
  };

  return (
    <aside className="hidden md:flex fixed top-1/2 left-0 -translate-y-1/2 z-40">
      <div className="bg-black/40 backdrop-blur-sm p-2 rounded-r-xl border-y border-r border-amber-700/30">
        <nav className="flex flex-col items-center space-y-4">
          {navItems.map((item, index) => {
            // All functional links will now use the handler
            const isFunctional = item.label === 'HOME' || item.label === 'AWARENESS' || item.label === 'PROVIDERS' || item.label === 'ABOUT US';
            return (
              <a 
                key={index} 
                href={item.hash} 
                onClick={(e) => handleNavigate(e, item.hash)}
                className="flex flex-col items-center justify-center w-20 h-20 text-white/80 hover:text-amber-400 hover:bg-white/10 rounded-lg transition-all duration-300 group"
              >
                <div className="w-8 h-8 mb-1 transition-transform duration-300 group-hover:scale-110">
                  {item.icon}
                </div>
                <span className="font-poppins text-xs font-bold tracking-wider">{item.label}</span>
              </a>
            );
          })}
        </nav>
      </div>
    </aside>
  );
};

export default LeftSidebar;