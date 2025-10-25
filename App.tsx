import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import TrackPage from './pages/TrackPage';
import DashboardPage from './pages/DashboardPage';
import AwarenessPage from './pages/AwarenessPage';
import ProvidersPage from './pages/ProvidersPage';
import AboutUsPage from './pages/AboutUsPage';

const App: React.FC = () => {
  const [route, setRoute] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderPage = () => {
    if (route.startsWith('#/track/')) {
      const track = route.split('/')[2] || 'individuals';
      return <TrackPage initialTrack={track} />;
    }
    if (route === '#/dashboard') {
      return <DashboardPage />;
    }
    if (route === '#/awareness') {
      return <AwarenessPage />;
    }
    if (route === '#/providers') {
      return <ProvidersPage />;
    }
    if (route === '#/about') {
      return <AboutUsPage />;
    }
    return <LandingPage />;
  };

  return (
    <>
     {renderPage()}
    </>
  );
};

export default App;