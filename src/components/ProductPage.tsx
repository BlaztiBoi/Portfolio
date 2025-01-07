import React, { useState } from 'react';
import { ShoppingCart, Heart, Play, Pause, Share2, Music } from 'lucide-react';

export default function ProductPage({ product }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = new Audio("../boom.mp3"); // Replace with actual preview URL

  const togglePlay = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Album Cover Section */}
        <div className="relative group">
          <div className="relative overflow-hidden rounded-lg aspect-square shadow-xl">
            <img
              src={"https://ourgenerationmusic.com/wp-content/uploads/2024/09/GXUssuOWwAErbOn.jpeg"}
              alt="Album Cover"
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            <button
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#F0A500] p-5 rounded-full opacity-90 hover:scale-110 transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-8 h-8 text-black" /> : <Play className="w-8 h-8 text-black" />}
            </button>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold">"Album Title"</h1>
          <p className="text-lg text-gray-300">{"Description about the album."}</p>
          <p className="text-2xl font-bold text-[#F0A500]">${"99.99"}</p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-3 bg-[#F0A500] text-black font-semibold rounded-full hover:bg-[#CF7500] transition-all duration-300 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" /> Add to Cart
            </button>
            <button className="px-8 py-3 border-2 border-[#F0A500] text-[#F0A500] font-semibold rounded-full hover:bg-[#F0A500] hover:text-black transition-all duration-300 flex items-center gap-2">
              <Heart className="w-5 h-5" /> Wishlist
            </button>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="px-6 py-3 border-2 border-[#F0A500] text-[#F0A500] font-semibold rounded-full hover:bg-[#F0A500] hover:text-black transition-all duration-300 flex items-center gap-2">
              <Share2 className="w-5 h-5" /> Share
            </button>
            <button className="px-6 py-3 border-2 border-[#F0A500] text-[#F0A500] font-semibold rounded-full hover:bg-[#F0A500] hover:text-black transition-all duration-300 flex items-center gap-2">
              <Music className="w-5 h-5" /> Tracklist
            </button>
          </div>

          {/* Music Preview */}
          
        </div>
      </div>
    </div>
  );
}
