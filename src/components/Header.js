// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Hammer, Menu, X } from 'lucide-react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

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

          {/* Hamburger menu for small screens */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-300 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
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

        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden bg-red-900/90 text-center space-y-2 py-4">
            <Link to="/" className="block text-yellow-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/resolutions" className="block text-yellow-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
              Party Resolutions
            </Link>
            <Link to="/directives" className="block text-yellow-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
              Party Directives
            </Link>
            <Link to="/constitution" className="block text-yellow-300 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>
              Party Constitution
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
