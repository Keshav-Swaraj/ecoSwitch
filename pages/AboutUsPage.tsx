import React, { useEffect, useRef } from 'react';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';

const TeamMember: React.FC<{
  name: string;
  role: string;
  image: string;
  bio: string;
  delay: number;
}> = ({ name, role, image, bio, delay }) => {
  const memberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const member = memberRef.current;
    if (!member) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fadeInUp');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(member);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={memberRef}
      className="bg-gradient-to-br from-[#2a211c]/90 to-[#1a1612]/90 border-2 border-amber-500/60 rounded-2xl p-6 backdrop-blur-sm hover:border-amber-400/80 hover:scale-[1.02] hover:shadow-xl transition-all duration-500 group opacity-0 shadow-lg relative"
    >
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 blur-sm"></div>
      <div className="relative z-10">
      <div className="flex flex-col items-center mb-4">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-amber-600/30 to-amber-800/50 mb-4 overflow-hidden ring-2 ring-amber-500/30 group-hover:ring-amber-400/60 transition-all duration-300">
          <img src={image} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <h3 className="font-poppins text-xl font-bold text-white tracking-wider group-hover:text-amber-300 transition-colors duration-300">{name}</h3>
        <p className="text-amber-400 font-medium group-hover:text-amber-300 transition-colors duration-300">{role}</p>
      </div>
      <p className="text-white/80 text-center leading-relaxed group-hover:text-white/90 transition-colors duration-300">{bio}</p>
      </div>
    </div>
  );
};

const StatCard: React.FC<{
  number: string;
  label: string;
  delay: number;
}> = ({ number, label, delay }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-fadeInUp');
            }, delay);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(card);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-gradient-to-br from-amber-500/10 to-amber-600/5 border-2 border-amber-500/60 rounded-xl p-6 text-center backdrop-blur-sm hover:border-amber-400/80 hover:scale-105 hover:shadow-xl transition-all duration-300 opacity-0 shadow-lg relative"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 blur-sm"></div>
      <div className="relative z-10">
      <div className="text-3xl font-bold text-amber-400 mb-2">{number}</div>
      <div className="text-white/80 font-medium">{label}</div>
      </div>
    </div>
  );
};

const AboutUsPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Keshav",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
      bio: "Keshav founded EcoSwitch with a vision to transform how we think about energy consumption. With 15+ years in renewable energy, Keshav leads our mission for a sustainable future."
    },
    {
      name: "Ankit",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
      bio: "Ankit oversees all technical aspects of EcoSwitch, bringing expertise in IoT and energy monitoring systems to create our innovative platform."
    },
    {
      name: "Sudhanshu",
      role: "Head of Sustainability",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop",
      bio: "With a background in environmental science, Sudhanshu ensures our solutions deliver meaningful impact for both individuals and industry partners."
    },
    {
      name: "Soujanya",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&fit=crop",
      bio: "Soujanya leads our development team, creating intuitive interfaces and powerful analytics tools that make energy management accessible to everyone."
    }
  ];

  const stats = [
    { number: "10K+", label: "Users Empowered" },
    { number: "50+", label: "Energy Providers" },
    { number: "25%", label: "Average Savings" },
    { number: "100%", label: "Carbon Neutral" }
  ];

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
          
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="font-poppins text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide drop-shadow-[0_0_8px_rgba(251,191,36,0.8)] mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200">EcoSwitch</span>
            </h1>
            <div className="mt-2 h-0.5 w-24 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
            <p className="text-lg text-white/80 mt-4 max-w-2xl mx-auto leading-relaxed">
              Empowering the world through intelligent energy management and sustainable innovation.
            </p>
          </div>

          <div className="container mx-auto px-4 max-w-6xl">
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {stats.map((stat, index) => (
                <StatCard key={index} {...stat} delay={index * 100} />
              ))}
            </div>

            {/* Mission Section */}
            <div className="max-w-4xl mx-auto mb-20">
              <div className="bg-gradient-to-br from-[#2a211c]/90 to-[#1a1612]/90 border-2 border-amber-500/60 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl hover:border-amber-400/80 hover:shadow-3xl transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 blur-sm"></div>
                <div className="relative z-10">
                <div className="text-center mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-amber-400 mb-4">Our Mission</h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
                </div>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className="text-white/90">
                    At EcoSwitch, we're on a mission to transform how individuals and industries understand and manage their energy consumption. We believe that awareness is the first step toward meaningful change, and our platform provides the tools needed to make informed decisions about energy usage.
                  </p>
                  <p className="text-white/90">
                    Founded in 2023, EcoSwitch combines cutting-edge technology with environmental expertise to create solutions that not only reduce carbon footprints but also save costs. We're committed to a cleaner, smarter future where energy efficiency is accessible to everyone.
                  </p>
                </div>
                </div>
              </div>
            </div>

            {/* Team Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="font-poppins text-2xl font-bold text-white mb-4">Meet Our Team</h2>
                <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                  <TeamMember key={index} {...member} delay={index * 150} />
                ))}
              </div>
            </div>

            {/* Approach Section */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-gradient-to-br from-[#2a211c]/90 to-[#1a1612]/90 border-2 border-amber-500/60 rounded-3xl p-8 md:p-12 backdrop-blur-sm shadow-2xl hover:border-amber-400/80 hover:shadow-3xl transition-all duration-300 relative">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 blur-sm"></div>
                <div className="relative z-10">
                <div className="text-center mb-8">
                  <h2 className="font-poppins text-2xl font-bold text-amber-400 mb-4">Our Approach</h2>
                  <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
                      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <h3 className="font-poppins text-xl font-bold text-white mb-3">Awareness</h3>
                    <p className="text-white/80 leading-relaxed">We provide detailed insights into energy consumption patterns, helping users understand their impact.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
                      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-poppins text-xl font-bold text-white mb-3">Action</h3>
                    <p className="text-white/80 leading-relaxed">Based on data analysis, we recommend practical steps to reduce energy usage and carbon emissions.</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-amber-500/30">
                      <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h3 className="font-poppins text-xl font-bold text-white mb-3">Accountability</h3>
                    <p className="text-white/80 leading-relaxed">Our tracking tools help users measure progress and stay committed to their sustainability goals.</p>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUsPage;