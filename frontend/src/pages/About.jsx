import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 p-8">
        <h2 className="text-3xl font-extrabold text-blue-900 mb-6">About AI Fake News Detection System</h2>
        
        <div className="prose lg:prose-lg text-gray-600">
          <p className="mb-4">
            The AI Fake News Detection System is a final-year engineering project focused on identifying misinformation on the internet using a multi-modal artificial intelligence approach.
          </p>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">How It Works</h3>
          <ul className="space-y-4">
            <li>
              <strong>Text NLP Analysis:</strong> We utilize state-of-the-art NLP transformers (like BERT) to analyze textual patterns, clickbait formatting, and known misinformation rhetoric.
            </li>
            <li>
              <strong>Computer Vision Forensics:</strong> A Convolutional Neural Network (CNN) extracts patterns from uploaded images to detect Error Level Analysis (ELA) anomalies indicative of deepfakes or manipulation.
            </li>
            <li>
              <strong>URL Cross-referencing:</strong> We maintain a rigorous database of trusted and untrusted news domains to provide context on source reliability.
            </li>
          </ul>

          <h3 className="text-xl font-bold text-gray-900 mt-8 mb-4">Technology Stack</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-blue-600">Frontend</h4>
              <ul className="list-disc list-inside">
                <li>React</li>
                <li>Tailwind CSS</li>
                <li>Vite</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600">Backend</h4>
              <ul className="list-disc list-inside">
                <li>Python</li>
                <li>FastAPI</li>
                <li>Scikit-Learn / PyTorch</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
