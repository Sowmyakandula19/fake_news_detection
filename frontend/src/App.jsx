import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Analyzer from './pages/Analyzer';
import ImageUpload from './pages/ImageUpload';
import About from './pages/About';
import AdminDashboard from './pages/AdminDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-900">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/analyzer" element={<Analyzer />} />
            <Route path="/image-upload" element={<ImageUpload />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </main>
        
        <footer className="bg-white py-6 border-t mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TruthLens AI Fake News Detection System. Final Year Project.
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
