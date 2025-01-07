import React from 'react';
import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-[#1A1C20] flex items-center">
      <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* Left side - Album Cover */}
        <div className="relative group">
          <div className="relative overflow-hidden rounded-lg aspect-square">
            <img
              src="https://ourgenerationmusic.com/wp-content/uploads/2024/09/GXUssuOWwAErbOn.jpeg"
              alt="Featured Album"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F0A500] p-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Play className="w-8 h-8 text-white" />
            </button>
          </div>
        </div>

        {/* Right side - Content */}
        <div className="text-white space-y-8">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Rediscover Music
            <span className="block text-[#F0A500]">Vinyl Like Never Before</span>
          </h1>
          <p className="text-lg text-gray-300">
            Immerse yourself in the warmth of analog sound. Browse our curated collection of premium vinyl records and experience music as it was meant to be heard.
          </p>
          <div className="flex space-x-4">
            <button className="px-8 py-3 bg-[#F0A500] text-black font-semibold rounded-full hover:bg-[#CF7500] transition-colors duration-300">
              Explore Now
            </button>
            <button className="px-8 py-3 border-2 border-[#F0A500] text-[#F0A500] font-semibold rounded-full hover:bg-[#F0A500] hover:text-black transition-colors duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;