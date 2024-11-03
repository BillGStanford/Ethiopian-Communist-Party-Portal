// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Hammer } from 'lucide-react';

function Header() {
  return (
    <header className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white shadow-lg">
      <div className="container mx-auto px-4">
        {/* Top banner */}
        <div className="py-1 text-center bg-red-900/50">
          <p className="text-sm text-yellow-300">Solidarity Forever</p>
        </div>
        
        {/* Main header */}
        <nav className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Hammer className="h-8 w-8 text-yellow-300 transform -rotate-45" />
              <Star className="h-8 w-8 text-yellow-300 -ml-2" />
            </div>
            <h1 className="text-2xl font-bold">Ethiopian Communist Party Portal</h1>
          </div>
          
          <div className="flex space-x-8">
            <Link to="/" className="hover:text-yellow-300 transition-colors flex items-center space-x-1">
              <span>Home</span>
            </Link>
            <Link to="/resolutions" className="hover:text-yellow-300 transition-colors flex items-center space-x-1">
              <span>Party Resolutions</span>
            </Link>
            <Link to="/directives" className="hover:text-yellow-300 transition-colors flex items-center space-x-1">
              <span>Party Directives</span>
            </Link>
            <Link to="/constitution" className="hover:text-yellow-300 transition-colors flex items-center space-x-1">
              <span>Party Constitution</span>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;