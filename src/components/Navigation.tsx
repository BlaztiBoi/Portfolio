import React, { useState } from 'react';
import { Menu, X, ShoppingCart, User, Search, Disc } from 'lucide-react';

const Navigation = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isExpanded ? 'bg-[#1A1C20] py-6' : 'bg-[#1A1C20]/90 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Disc className="w-8 h-8 text-[#F0A500]" />
            <span className="text-white text-xl font-bold">VinylVibe</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-[#F0A500] transition-colors">Home</a>
            <a href="/explore" className="text-white hover:text-[#F0A500] transition-colors">Explore</a>
            <a href="/top-sellers" className="text-white hover:text-[#F0A500] transition-colors">Top Sellers</a>
            <a href="/pre-order" className="text-white hover:text-[#F0A500] transition-colors">Pre-Order</a>
            <a href="/membership" className="text-white hover:text-[#F0A500] transition-colors">Membership</a>
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-6">
            <Search className="w-6 h-6 text-white hover:text-[#F0A500] cursor-pointer transition-colors" />
            <ShoppingCart className="w-6 h-6 text-white hover:text-[#F0A500] cursor-pointer transition-colors" />
            <div className="relative">
              <User 
                className="w-6 h-6 text-white hover:text-[#F0A500] cursor-pointer transition-colors"
                onClick={() => setIsProfileOpen(!isProfileOpen)}
              />
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                  <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                  <a href="/orders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Orders</a>
                  <a href="/wishlist" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Wishlist</a>
                  <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                  <hr className="my-2" />
                  <a href="/logout" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100">Logout</a>
                </div>
              )}
            </div>
            <button className="md:hidden" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isExpanded && (
          <div className="md:hidden mt-4 space-y-4">
            <a href="/" className="block text-white hover:text-[#F0A500] transition-colors">Home</a>
            <a href="/explore" className="block text-white hover:text-[#F0A500] transition-colors">Explore</a>
            <a href="/top-sellers" className="block text-white hover:text-[#F0A500] transition-colors">Top Sellers</a>
            <a href="/pre-order" className="block text-white hover:text-[#F0A500] transition-colors">Pre-Order</a>
            <a href="/membership" className="block text-white hover:text-[#F0A500] transition-colors">Membership</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;