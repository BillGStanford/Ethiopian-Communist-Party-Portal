// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PartyResolutions from './pages/PartyResolutions';
import PartyDirectives from './pages/PartyDirectives';
import PartyConstitution from './pages/PartyConstitution';
import PDFView from './pages/view-pdf';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-50 to-red-100">
        <Header />
        <div className="flex flex-1">
          <Sidebar />
          <main className="flex-1 p-6 pb-24"> {/* Added padding bottom for footer */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/resolutions" element={<PartyResolutions />} />
              <Route path="/directives" element={<PartyDirectives />} />
              <Route path="/constitution" element={<PartyConstitution />} />
              <Route path="/view-pdf/:documentId" element={<PDFView />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;