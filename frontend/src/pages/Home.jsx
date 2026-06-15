import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Zap, Globe, Search } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-blue-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-blue-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Detect Fake News</span>{' '}
                  <span className="block text-blue-400 xl:inline">with AI Accuracy</span>
                </h1>
                <p className="mt-3 text-base text-blue-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Protect yourself from misinformation. Our advanced machine learning models analyze text, images, and article URLs to determine the likelihood of fake news.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link to="/analyzer" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                      Start Analyzing
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Core Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              A comprehensive verification platform
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white mb-4 shadow-lg">
                  <Search className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Text NLP Analysis</h3>
                <p className="mt-2 text-base text-gray-500">
                  Analyzes linguistic patterns, clickbait keywords, and sentiment using BERT and other ML classifiers.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white mb-4 shadow-lg">
                  <Zap className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Image Verification</h3>
                <p className="mt-2 text-base text-gray-500">
                  Detects deepfakes and manipulated images using deep learning Computer Vision pipelines.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-blue-500 text-white mb-4 shadow-lg">
                  <Globe className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">Source Credibility</h3>
                <p className="mt-2 text-base text-gray-500">
                  Cross-references article URLs against databases of known reliable and untrustworthy domains.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
