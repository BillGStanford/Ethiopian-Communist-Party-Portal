// src/pages/PartyConstitution.js
import React from 'react';
import { Star, Hammer, Flag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function PartyConstitution() {
  const navigate = useNavigate();

  const handleViewConstitution = () => {
    navigate('/view-pdf/COMMUNIST-PARTY-OF-ETHIOPIA');
  };

  return (
    <div className="container mx-auto px-4 text-center">
      <div className="max-w-4xl mx-auto bg-gradient-to-b from-red-900 to-red-800 p-12 rounded-lg shadow-2xl">
        <div className="mb-8 flex justify-center items-center space-x-4">
          <Hammer className="h-12 w-12 text-yellow-300 transform -rotate-45" />
          <Star className="h-16 w-16 text-yellow-300" />
          <Flag className="h-12 w-12 text-yellow-300" />
        </div>
        <h2 className="text-4xl font-bold text-yellow-300 mb-6">Party Constitution</h2>
        <div className="flex items-center justify-center space-x-4 mb-8">
          <div className="h-px bg-red-700 flex-1"></div>
          <Star className="h-8 w-8 text-yellow-300" />
          <div className="h-px bg-red-700 flex-1"></div>
        </div>
        <p className="text-red-100 text-xl mb-8">
          The foundational document that guides our principles and organization. The Constitution is currently not in effect.
        </p>
        <div className="bg-red-900/30 p-8 rounded-lg backdrop-blur-sm">

        </div>
      </div>
    </div>
  );
}

export default PartyConstitution;