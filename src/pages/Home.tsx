import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2E5077] via-[#4DA1A9] to-[#79D7BE] 
      flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">Game Portal</h1>
        <div className="grid gap-4">
          <button
            onClick={() => navigate('/blackjack')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 
              transition-all duration-300 text-white text-xl font-semibold"
          >
            Play Blackjack
          </button>
        </div>
      </div>
    </div>
  );
}