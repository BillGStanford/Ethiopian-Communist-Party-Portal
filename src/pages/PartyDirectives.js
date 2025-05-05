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
    {
      id: 'dir-003',
      title: "Form the Rules and Guidelines of the Party",
      description: "Creating Committees to Lead our Party",
      issuer: "Central Committee",
      office: "General Secretary of the Central Committee",
      date: "2024-11-03",
      pdfPath: "/pdfs/Central Committee of the Communist Party of Ethiopia _ DR. 03.pdf" // Changed from pdfUrl to pdfPath for consistency
    },
    {
      id: 'dir-004',
      title: "EN | Memberships Directive",
      description: "Creating Committees to Lead our Party",
      issuer: "Central Committee",
      office: "General Secretary of the Central Committee",
      date: "2024-11-03",
      pdfPath: "/pdfs/Central Committee of the Communist Party of Ethiopia _ Directive No. 04.pdf" // Changed from pdfUrl to pdfPath for consistency
    },
        {
      id: 'dir-005',
      title: "AM | Memberships Directive",
      description: "Creating Committees to Lead our Party",
      issuer: "Central Committee",
      office: "General Secretary of the Central Committee",
      date: "2024-11-03",
      pdfPath: "/pdfs/Amharic _ Central Committee of the Communist Party of Ethiopia _ Directive No. 04.pdf" // Changed from pdfUrl to pdfPath for consistency
    },
      {
      id: 'dir-006',
      title: "EN | Official Party Ideology",
      description: "Official Party Ideology",
      issuer: "Central Committee",
      office: "General Secretary of the Central Committee",
      date: "2024-12-12",
      pdfPath: "/pdfs/EN_ Official Party Ideology.pdf" // Changed from pdfUrl to pdfPath for consistency
    },
          {
      id: 'dir-006',
      title: "AH | ኦፊሴላዊ ፓርቲ ርዕዮተ ዓለም",
      description: "Official Party Ideology",
      issuer: "Central Committee",
      office: "General Secretary of the Central Committee",
      date: "2024-12-12",
      pdfPath: "/pdfs/AH_ Official Party Ideology.pdf" // Changed from pdfUrl to pdfPath for consistency
    },

          {
      id: 'dir-007',
      title: "EN | Founding and First Congress of the Ethiopian Revolutionary Communist Party",
      description: "Founding and First Congress of the Ethiopian Revolutionary Communist Party",
      issuer: "Founding and First Congress of the Ethiopian Revolutionary Communist Party",
      office: "Founding and First Congress of the Ethiopian Revolutionary Communist Party",
      date: "2024-12-12",
      pdfPath: "/pdfs/Founding and First Congress of the Ethiopian Revolutionary Communist Party (ERCP).pdf" // Changed from pdfUrl to pdfPath for consistency
    },

              {
      id: 'dir-007',
      title: "AH | የኢትዮጵያ አብዮታዊ ኮሚኒስት ፓርቲ (ኢአርሲፒ) ምስረታ እና የመጀመሪያ ኮንግረስ",
      description: "የኢትዮጵያ አብዮታዊ ኮሚኒስት ፓርቲ (ኢአርሲፒ) ምስረታ እና የመጀመሪያ ኮንግረስ",
      issuer: "Founding and First Congress of the Ethiopian Revolutionary Communist Party",
      office: "Founding and First Congress of the Ethiopian Revolutionary Communist Party",
      date: "2024-12-12",
      pdfPath: "/pdfs/Founding and First Congress of the Ethiopian Revolutionary Communist Party (ERCP).pdf" // Changed from pdfUrl to pdfPath for consistency
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
