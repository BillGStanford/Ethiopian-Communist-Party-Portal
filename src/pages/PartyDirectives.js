import React from 'react';
import DocumentCard from '../components/DocumentCard';

const PartyDirectives = () => {
  const directives = [
    {
      id: 'dir-001',
      title: "Key Party Appointments",
      description: "Appointment to key positions within the Party",
      issuer: "Central Committee",
      office: "General Secretary of the Central Committee",
      date: "2024-11-02",
      pdfPath: "/pdfs/Central-Committee-of-the-Communist-Party-of-Ethiopia-Directive 01.pdf" // Changed from pdfUrl to pdfPath for consistency
    },
    {
      id: 'dir-002',
      title: " Creation of Committees & Responsibilities",
      description: "Creating Committees to Lead our Party",
      issuer: "Central Committee",
      office: "General Secretary of the Central Committee",
      date: "2024-11-02",
      pdfPath: "/pdfs/Central-Committee-of-the-Communist-Party-of-Ethiopia _ DR.02.pdf" // Changed from pdfUrl to pdfPath for consistency
    },
    // Add more directives as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-red-800 mb-6">Party Directives</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {directives.map((directive) => (
          <DocumentCard 
            key={directive.id} 
            document={directive}
          />
        ))}
      </div>
    </div>
  );
};

export default PartyDirectives;
