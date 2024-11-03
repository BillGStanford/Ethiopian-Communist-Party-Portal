import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex">
      <div 
        className="w-16 bg-red-900 text-white transition-all duration-300 hover:w-48"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="p-4">
          {isHovered && (
            <div className="space-y-4">
              <a 
                href="https://ethiopian-communist-party.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white hover:text-yellow-300"
              >
                <ExternalLink className="h-5 w-5" />
                <span>External Resource</span>
              </a>
            </div>
          )}
        </div>
      </div>
      

    </div>
  );
};

export default Sidebar;