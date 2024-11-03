import React from 'react';
import { useParams } from 'react-router-dom';
import { FileText } from 'lucide-react';

const PDFView = () => {
  const { documentId } = useParams();
  
  const getPDFUrl = (id) => {
    // This would typically come from an API or database
    return `/pdfs/${id}.pdf`;
  };

  // Open PDF in new tab
  const openPDF = () => {
    window.open(getPDFUrl(documentId), '_blank');
  };

  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={openPDF}
        className="flex items-center gap-2 px-4 py-2 bg-red-700 text-white rounded-lg hover:bg-red-800 transition-colors"
      >
        <FileText className="h-5 w-5" />
        Open PDF in New Tab
      </button>
    </div>
  );
};

export default PDFView;