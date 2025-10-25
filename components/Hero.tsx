import React from 'react';

const NeonText: React.FC<{children: React.ReactNode; className?: string}> = ({ children, className }) => {
    return (
        <span className={`drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] ${className}`}>
            {children}
        </span>
    );
};

const Hero: React.FC = () => {
  return (
    <section 
      id="hero-section"
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="text-center flex flex-col items-center justify-center p-4 max-w-4xl">
        <div className="relative my-4">
          <h1 className="font-poppins font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wider" style={{ WebkitTextStroke: '1px rgba(252, 211, 77, 0.7)', color: 'transparent' }}>
            <NeonText>EcoSwitch</NeonText>
          </h1>
        </div>
        
        <h2 className="font-poppins text-xl md:text-2xl lg:text-3xl font-bold tracking-wider text-amber-200/90 drop-shadow-[0_0_6px_rgba(251,191,36,0.7)] mt-4 max-w-2xl">
          Powering Awareness for a Cleaner, Smarter Future.
        </h2>

        <div className="mt-8 text-center max-w-2xl">
          <p className="text-sm md:text-base lg:text-lg tracking-[0.1em] text-white/90 mb-4">
            Empowering People, Fleets, & Industry for Responsible Energy Futures.
          </p>
          <p className="text-xs md:text-sm tracking-widest text-white/70">
            EcoSwitch is a clean-energy operating system, bridging energy awareness, monitoring, and responsible management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;