import React from 'react';
import { FileText, Calendar, User, Building } from 'lucide-react';

const DocumentCard = ({ document }) => {
  const handleReadClick = () => {
    window.open(document.pdfPath, '_blank');
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4">
      <div className="flex flex-col h-full">
        <h3 className="text-xl font-semibold text-red-800 mb-2">{document.title}</h3>
        
        {document.description && (
          <p className="text-gray-600 mb-4 flex-grow">{document.description}</p>
        )}
        
        <div className="space-y-2 text-sm text-gray-500">
          {document.issuer && (
            <div className="flex items-center gap-2">
              <User className="h-4 w-4" />
              <span>{document.issuer}</span>
            </div>
          )}
          
          {document.office && (
            <div className="flex items-center gap-2">
              <Building className="h-4 w-4" />
              <span>{document.office}</span>
            </div>
          )}
          
          {document.date && (
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{document.date}</span>
            </div>
          )}
        </div>

        {/* Render vote record if available */}
        {document.VoteRecord && document.votes && (
          <document.VoteRecord votes={document.votes} />
        )}
        
        <button
          onClick={handleReadClick}
          className="mt-4 w-full flex items-center justify-center gap-2 bg-red-700 text-white py-2 px-4 rounded hover:bg-red-800 transition-colors"
        >
          <FileText className="h-5 w-5" />
          Read Resolution
        </button>
      </div>
    </div>
  );
};

export default DocumentCard;
