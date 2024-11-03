// src/components/Footer.js
import React from 'react';
import { Star } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-900 via-red-800 to-red-900 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center mb-4">
          <div className="h-px bg-red-700 flex-1 max-w-xs"></div>
          <Star className="h-6 w-6 text-yellow-300 mx-4" />
          <div className="h-px bg-red-700 flex-1 max-w-xs"></div>
        </div>
        <div className="text-center">
          <p className="text-red-100 mb-2">For the Workers of the World</p>
          <p className="text-red-200">© 2024 Ethiopian Communist Party. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;