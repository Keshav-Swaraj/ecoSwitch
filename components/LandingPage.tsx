import React, { useLayoutEffect, useRef } from 'react';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import Hero from './Hero';
import Footer from './Footer';
import Features from './Features';
import Energies from './Energies';
import TrackSelection from './TrackSelection';

// Add GSAP and ScrollTrigger to the window scope for TypeScript
declare var gsap: any;
declare var ScrollTrigger: any;

const LandingPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Ensure GSAP and ScrollTrigger are loaded
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.error('GSAP or ScrollTrigger not loaded');
      return;
    }

    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      // Set initial state for all animated sections
      gsap.set('#hero-section', { autoAlpha: 1, scale: 1 });
      gsap.set(['#features-section', '#energies-section', '#track-section'], { autoAlpha: 0, scale: 0.95 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.5, // Increased for a smoother, more fluid effect
        },
      });

      // A chained timeline guarantees sequential animation.
      // Each .to() starts only after the previous one completes.
      tl.to('#hero-section', { autoAlpha: 0, scale: 0.95, ease: 'power2.inOut' })
        .to('#features-section', { autoAlpha: 1, scale: 1, ease: 'power2.inOut' })
        
        .to('#features-section', { autoAlpha: 0, scale: 0.95, ease: 'power2.inOut' })
        .to('#energies-section', { autoAlpha: 1, scale: 1, ease: 'power2.inOut' })
        
        .to('#energies-section', { autoAlpha: 0, scale: 0.95, ease: 'power2.inOut' })
        .to('#track-section', { autoAlpha: 1, scale: 1, ease: 'power2.inOut' });
    
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full text-white bg-black">
      {/* Layer 1: Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="https://res.cloudinary.com/do2bp6ryt/video/upload/v1761361892/hero_mwxyu9.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Layer 2: Dark Overlay */}
      <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-10"></div>
      
      {/* Layer 3: Content */}
      <div className="relative z-20">
        <Header />
        <LeftSidebar />
        <RightSidebar />
        
        <main>
          {/* This container provides the scroll height for the animation */}
          <div ref={containerRef} style={{ height: '400vh' }}>
            {/* This div sticks to the top and holds the animated components */}
            <div className="sticky top-0 h-screen w-full overflow-hidden">
              <Hero />
              <Features />
              <Energies />
              <TrackSelection />
            </div>
          </div>
          {/* Additional page content can be added here */}
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;