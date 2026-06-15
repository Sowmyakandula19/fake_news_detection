import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShieldAlert, Home, FileText, Image as ImageIcon, Info, Lock } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? "bg-blue-700 text-white" : "text-blue-100 hover:bg-blue-700 hover:text-white";

  return (
    <nav className="bg-blue-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <ShieldAlert className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-white font-bold text-xl">TruthLens AI</span>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${isActive('/')}`}>
                  <Home className="w-4 h-4 mr-1" /> Home
                </Link>
                <Link to="/analyzer" className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${isActive('/analyzer')}`}>
                  <FileText className="w-4 h-4 mr-1" /> Analyzer
                </Link>
                <Link to="/image-upload" className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${isActive('/image-upload')}`}>
                  <ImageIcon className="w-4 h-4 mr-1" /> Image Check
                </Link>
                <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${isActive('/about')}`}>
                  <Info className="w-4 h-4 mr-1" /> About
                </Link>
                <Link to="/admin" className={`px-3 py-2 rounded-md text-sm font-medium flex items-center ${isActive('/admin')}`}>
                  <Lock className="w-4 h-4 mr-1" /> Admin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
