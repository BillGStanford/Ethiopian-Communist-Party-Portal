import React from 'react';
import DocumentCard from '../components/DocumentCard';
import { ThumbsUp, ThumbsDown, Minus } from 'lucide-react';

function PartyResolutions() {
  const resolutions = [
    {
      id: 'res-001',
      title: "EN | FINAL: Rules and Guidelines of the Party",
      description: "Form the Temporary Document that will Lead the Party",
      issuer: "Central Committee",
      office: "General Secretary",
      date: "2024-11-03",
      pdfPath: "/pdfs/Temporary Governing Document of Ethiopian Communist Party.pdf", // This should match a file in /src/pdfs
      votes: {
        ayes: 2,
        nays: 0,
        abstains: 0
      }
    },
    {
      id: 'res-001',
      title: "AM | FINAL: Rules and Guidelines of the Party",
      description: "Form the Temporary Document that will Lead the Party",
      issuer: "Central Committee",
      office: "General Secretary",
      date: "2024-11-03",
      pdfPath: "/pdfs/Amharic _ Temporary Governing Document of Ethiopian Communist Party.pdf", // This should match a file in /src/pdfs
      votes: {
        ayes: 2,
        nays: 0,
        abstains: 0
      }
    },
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-red-800 mb-6">Party Resolutions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {resolutions.map((resolution) => (
          <DocumentCard 
            key={resolution.id} 
            document={{
              ...resolution,
              VoteRecord: ({ votes }) => (
                <div className="mt-3 p-2 bg-gray-50 rounded-lg">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">Vote Record</h4>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm text-gray-700">{votes.ayes}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsDown className="h-4 w-4 text-red-600" />
                      <span className="text-sm text-gray-700">{votes.nays}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Minus className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm text-gray-700">{votes.abstains}</span>
                    </div>
                  </div>
                </div>
              )
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default PartyResolutions;
