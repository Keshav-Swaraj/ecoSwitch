import React from 'react';

const RightSidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex fixed top-1/2 right-0 -translate-y-1/2 z-40">
      <div className="bg-black/40 backdrop-blur-sm p-2 rounded-l-xl border-y border-l border-amber-700/30">
        <div className="flex flex-col gap-4 p-2">
          <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </a>
          <a href="#" className="text-amber-400 hover:text-amber-300 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;