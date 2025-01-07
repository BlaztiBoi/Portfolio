import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

const TrendingSection = () => {
  const trendingRecords = [
    {
      id: 1,
      title: "Dark Side of the Moon",
      artist: "Pink Floyd",
      price: "$29.99",
      image: "https://images.unsplash.com/photo-1502773860571-211a597d6e4b?auto=format&fit=crop&q=80"
    },
    {
      id: 2,
      title: "Kind of Blue",
      artist: "Miles Davis",
      price: "$24.99",
      image: "https://images.unsplash.com/photo-1629276301820-0f3eedc29fd0?auto=format&fit=crop&q=80"
    },
    {
      id: 3,
      title: "Abbey Road",
      artist: "The Beatles",
      price: "$27.99",
      image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&q=80"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-tr from-amber-200 to-yellow-200">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-[#1A1C20] mb-12">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trendingRecords.map((record) => (
            <div 
              key={record.id} 
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg cursor-pointer border-2 border-[#F0A500]"
              onClick={() => window.location.href = `/product`}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={record.image}
                  alt={record.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1A1C20]">{record.title}</h3>
                <p className="text-gray-600 mb-4">{record.artist}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#F0A500] font-bold text-lg">{record.price}</span>
                  <div className="flex space-x-2">
                    <button 
                      className="p-2 rounded-full bg-[#1A1C20] text-white hover:bg-[#F0A500] transition-colors duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to wishlist logic
                      }}
                    >
                      <Heart className="w-5 h-5" />
                    </button>
                    <button 
                      className="p-2 rounded-full bg-[#1A1C20] text-white hover:bg-[#F0A500] transition-colors duration-300"
                      onClick={(e) => {
                        e.stopPropagation();
                        // Add to cart logic
                      }}
                    >
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;