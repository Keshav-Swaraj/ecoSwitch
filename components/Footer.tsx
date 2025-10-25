import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative w-full z-30 p-4 bg-black/60 backdrop-blur-sm">
      <div className="container mx-auto flex justify-center items-center text-center">
        <p className="text-xs text-white/50 tracking-wider">
          &copy; {new Date().getFullYear()} EcoSwitch. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;