import React from 'react';
import Header from '../components/Header';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import Footer from '../components/Footer';

const TeamMember: React.FC<{
  name: string;
  role: string;
  image: string;
  bio: string;
}> = ({ name, role, image, bio }) => (
  <div className="bg-[#2a211c]/80 border border-amber-900/50 rounded-2xl p-6 backdrop-blur-sm hover:border-amber-500 hover:scale-[1.02] transition-all duration-300">
    <div className="flex flex-col items-center mb-4">
      <div className="w-24 h-24 rounded-full bg-amber-800/50 mb-4 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="font-poppins text-xl font-bold text-white tracking-wider">{name}</h3>
      <p className="text-amber-400 font-medium">{role}</p>
    </div>
    <p className="text-white/80 text-center">{bio}</p>
  </div>
);

const AboutUsPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Keshav",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop",
      bio: "Alex founded EcoSwitch with a vision to transform how we think about energy consumption. With 15+ years in renewable energy, Alex leads our mission for a sustainable future."
    },
    {
      name: "Ankit",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop",
      bio: "Jamie oversees all technical aspects of EcoSwitch, bringing expertise in IoT and energy monitoring systems to create our innovative platform."
    },
    {
      name: "Sudhanshu",
      role: "Head of Sustainability",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop",
      bio: "With a background in environmental science, Sam ensures our solutions deliver meaningful impact for both individuals and industry partners."
    },
    {
      name: "Soujanya",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=200&h=200&fit=crop",
      bio: "Morgan leads our development team, creating intuitive interfaces and powerful analytics tools that make energy management accessible to everyone."
    }
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
          
          <div className="text-center mb-12">
            <h1 className="font-poppins text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-wide drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]">
              About EcoSwitch
            </h1>
            <div className="mt-2 h-1 w-24 bg-amber-400 mx-auto"></div>
          </div>

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <div className="bg-[#2a211c]/80 border border-amber-900/50 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="font-poppins text-2xl font-bold text-amber-400 mb-4">Our Mission</h2>
                <p className="text-white/90 mb-6">
                  At EcoSwitch, we're on a mission to transform how individuals and industries understand and manage their energy consumption. We believe that awareness is the first step toward meaningful change, and our platform provides the tools needed to make informed decisions about energy usage.
                </p>
                <p className="text-white/90">
                  Founded in 2023, EcoSwitch combines cutting-edge technology with environmental expertise to create solutions that not only reduce carbon footprints but also save costs. We're committed to a cleaner, smarter future where energy efficiency is accessible to everyone.
                </p>
              </div>
            </div>

            <h2 className="font-poppins text-2xl font-bold text-center text-white mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {teamMembers.map((member, index) => (
                <TeamMember key={index} {...member} />
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="bg-[#2a211c]/80 border border-amber-900/50 rounded-2xl p-8 backdrop-blur-sm">
                <h2 className="font-poppins text-2xl font-bold text-amber-400 mb-4">Our Approach</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-white mb-2">Awareness</h3>
                    <p className="text-white/90">We provide detailed insights into energy consumption patterns, helping users understand their impact.</p>
                  </div>
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-white mb-2">Action</h3>
                    <p className="text-white/90">Based on data analysis, we recommend practical steps to reduce energy usage and carbon emissions.</p>
                  </div>
                  <div>
                    <h3 className="font-poppins text-xl font-bold text-white mb-2">Accountability</h3>
                    <p className="text-white/90">Our tracking tools help users measure progress and stay committed to their sustainability goals.</p>
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