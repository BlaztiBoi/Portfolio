import React from 'react';
import { Home, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function FloatingNav() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-lg 
      px-6 py-3 rounded-full shadow-lg border border-white/20 z-50">
      <div className="flex gap-6">
        <button
          onClick={() => navigate(-1)}
          className="text-white hover:text-emerald-300 transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={24} />
        </button>
        <button
          onClick={() => navigate('/home')}
          className="text-white hover:text-emerald-300 transition-colors"
          aria-label="Go to home"
        >
          <Home size={24} />
        </button>
      </div>
    </div>
  );
}