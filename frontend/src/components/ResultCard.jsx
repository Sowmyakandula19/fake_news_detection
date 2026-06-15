import React from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';

export default function ResultCard({ prediction, score, explanation, details }) {
  let bgColor, icon, titleColor;

  if (prediction === 'REAL NEWS') {
    bgColor = 'bg-green-50';
    titleColor = 'text-green-800';
    icon = <CheckCircle className="h-8 w-8 text-green-500" />;
  } else {
    // FAKE NEWS default
    bgColor = 'bg-red-50';
    titleColor = 'text-red-800';
    icon = <AlertCircle className="h-8 w-8 text-red-500" />;
  }

  return (
    <div className={`rounded-xl shadow-lg overflow-hidden ${bgColor} border border-gray-200 mt-8 transition-all duration-300`}>
      <div className="p-6">
        <div className="flex items-center mb-4">
          {icon}
          <h3 className={`ml-3 text-2xl font-bold ${titleColor}`}>
            Result: {prediction}
          </h3>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-700 text-lg">
            <span className="font-semibold">AI Confidence (Fake Score): </span>
            <span className="inline-block px-3 py-1 rounded-full text-sm font-bold bg-white shadow-sm border">
              {score}%
            </span>
          </p>
        </div>

        <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Explanation</h4>
          <p className="text-gray-800 text-md">{explanation}</p>
        </div>

        {details && (
          <div className="mt-4">
            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">Component Breakdown</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {details.text && (
                <div className="bg-white p-3 rounded border text-sm">
                  <span className="font-semibold text-blue-800">Text Model:</span> {details.text.fake_probability_score}% - {details.text.prediction}
                </div>
              )}
              {details.url && (
                <div className="bg-white p-3 rounded border text-sm">
                  <span className="font-semibold text-blue-800">URL Model:</span> {details.url.fake_probability_score}% - {details.url.prediction}
                </div>
              )}
              {details.image && (
                <div className="bg-white p-3 rounded border text-sm">
                  <span className="font-semibold text-blue-800">Image Model:</span> {details.image.fake_probability_score}% - {details.image.prediction}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
