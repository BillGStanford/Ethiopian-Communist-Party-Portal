// src/pages/Home.js
import React from 'react';
import { Star, Hammer, Flag, BookOpen, Globe, Users } from 'lucide-react';

function Home() {
  return (
    <div className="container mx-auto px-4 text-center">
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto bg-gradient-to-b from-red-900 to-red-800 p-12 rounded-lg shadow-2xl mb-12">
        <div className="flex justify-center items-center mb-8 space-x-4">
          <Hammer className="h-12 w-12 text-yellow-300 transform -rotate-45" />
          <Star className="h-16 w-16 text-yellow-300" />
          <Flag className="h-12 w-12 text-yellow-300" />
        </div>
        <h1 className="text-5xl font-bold text-yellow-300 mb-6">
          The People's Digital Archive
        </h1>
        <p className="text-2xl text-red-100 mb-8 font-light">
          Uniting the workers through knowledge and solidarity
        </p>
        <div className="h-px bg-red-700 max-w-2xl mx-auto mb-8"></div>
      </div>

      {/* Featured Sections */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white/90 p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all">
          <div className="bg-red-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Star className="h-8 w-8 text-yellow-300" />
          </div>
          <h2 className="text-2xl font-bold text-red-800 mb-4">Latest Directives</h2>
          <p className="text-gray-700">Access the most recent party directives and policy updates</p>
        </div>

        <div className="bg-white/90 p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all">
          <div className="bg-red-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Hammer className="h-8 w-8 text-yellow-300" />
          </div>
          <h2 className="text-2xl font-bold text-red-800 mb-4">Party Constitution</h2>
          <p className="text-gray-700">The foundational principles that guide our movement</p>
        </div>

        <div className="bg-white/90 p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all">
          <div className="bg-red-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Flag className="h-8 w-8 text-yellow-300" />
          </div>
          <h2 className="text-2xl font-bold text-red-800 mb-4">Resolutions</h2>
          <p className="text-gray-700">Browse historical party resolutions and decisions</p>
        </div>
      </div>

      {/* New Sections */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white/90 p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all">
          <div className="bg-red-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <BookOpen className="h-8 w-8 text-yellow-300" />
          </div>
          <h2 className="text-2xl font-bold text-red-800 mb-4">People’s Library</h2>
          <p className="text-gray-700">Explore a collection of revolutionary writings, party publications, and historical documents that inspire and educate the masses.</p>
        </div>

        <div className="bg-white/90 p-8 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all">
          <div className="bg-red-800 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Globe className="h-8 w-8 text-yellow-300" />
          </div>
          <h2 className="text-2xl font-bold text-red-800 mb-4">Global Solidarity</h2>
          <p className="text-gray-700">Connect with revolutionary movements and allies across the globe in our commitment to a just and united world.</p>
        </div>
      </div>

      {/* Historical Timeline Section */}
      <div className="max-w-4xl mx-auto bg-red-50 p-8 rounded-lg shadow-lg mb-12">
        <h2 className="text-3xl font-bold text-red-800 mb-6">Historical Milestones</h2>
        <ul className="space-y-4 text-gray-800 text-lg">
          <li>• <span className="text-red-700 font-semibold">1974:</span> Revolution that ended centuries of monarchy and initiated the people’s movement.</li>
          <li>• <span className="text-red-700 font-semibold">1987:</span> Establishment of the People’s Democratic Republic with a commitment to equality and social justice.</li>
          <li>• <span className="text-red-700 font-semibold">Present:</span> A movement rekindled with the spirit of solidarity and empowerment for all.</li>
        </ul>
      </div>

      {/* Quote Section */}
      <div className="max-w-4xl mx-auto bg-red-50 p-8 rounded-lg shadow-lg mb-12">
        <blockquote className="text-2xl text-red-800 italic font-light">
          "Unity is strength. Division is weakness."
        </blockquote>
        <div className="flex justify-center items-center mt-4 space-x-2">
          <Star className="h-4 w-4 text-red-800" />
          <Star className="h-4 w-4 text-red-800" />
          <Star className="h-4 w-4 text-red-800" />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="max-w-3xl mx-auto p-8 bg-gradient-to-r from-red-800 to-red-900 text-yellow-300 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
        <p className="text-lg mb-6">
          Together, we work towards a society that uplifts every worker and stands firm in the face of oppression. Join us in the fight for justice and equality.
        </p>
        <a
  href="https://docs.google.com/document/d/1bFBC0WhVWUNSbG5DAyG81Lmz-YPRo_Wqekq_mJmojSs/edit?tab=t.0" // Replace with the actual URL
  target="_blank"
  rel="noopener noreferrer"
  className="bg-yellow-300 text-red-800 font-semibold px-6 py-3 rounded-lg transform hover:scale-105 transition-all"
>
  Sign Up
</a>

      </div>
    </div>
  );
}

export default Home;
