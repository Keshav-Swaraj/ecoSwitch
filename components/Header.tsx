import React from 'react';

const EcoSwitchLogo: React.FC = () => (
    <span className="font-poppins text-2xl lg:text-3xl font-black tracking-tighter text-white drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
        Eco<span className="text-amber-400">Switch</span>
    </span>
);


const Header: React.FC = () => {
  const handleNavigate = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    window.location.hash = hash;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 lg:p-6 bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <EcoSwitchLogo />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          <a href="#/" onClick={(e) => handleNavigate(e, '#')} className="font-poppins font-bold tracking-widest hover:text-amber-400 transition-colors duration-300 drop-shadow-[0_0_5px_rgba(251,191,36,0.7)]">HOME</a>
          <a href="#/awareness" onClick={(e) => handleNavigate(e, '#/awareness')} className="font-poppins font-bold tracking-widest hover:text-amber-400 transition-colors duration-300 drop-shadow-[0_0_5px_rgba(251,191,36,0.7)]">AWARENESS</a>
          <a href="#/providers" onClick={(e) => handleNavigate(e, '#/providers')} className="font-poppins font-bold tracking-widest hover:text-amber-400 transition-colors duration-300 drop-shadow-[0_0_5px_rgba(251,191,36,0.7)]">PROVIDERS</a>
        </nav>

        <div>
          <button className="font-poppins bg-amber-800/80 backdrop-blur-sm border border-amber-600 text-white font-bold py-2 px-6 rounded-md hover:bg-amber-700 transition-all duration-300 shadow-[0_0_10px_rgba(217,119,6,0.8)]">
            SIGN IN
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;