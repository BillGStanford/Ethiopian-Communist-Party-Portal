import React from 'react';
import DocumentCard from '../components/DocumentCard';

function PartyResolutions() {
  // Update the resolutions array to include PDF filenames that match files in /src/pdfs
  const resolutions = [
    {
      id: 'res-001',
      title: "None Currently Issued",
      description: "",
      issuer: "",
      office: "",
      date: "",
      pdfPath: "/pdfs/" // This should match a file in /src/pdfs
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-red-800 mb-6">Party Resolutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {resolutions.map((resolution) => (
          <DocumentCard 
            key={resolution.id} 
            document={resolution}
          />
        ))}
      </div>
    </div>
  );
}

export default PartyResolutions;