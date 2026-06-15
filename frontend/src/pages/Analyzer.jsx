import React, { useState } from 'react';
import { analyzeText, analyzeUrl, analyzeImage } from '../api/api';
import ResultCard from '../components/ResultCard';
import { Loader2, FileText, Link2, Image as ImageIcon, UploadCloud } from 'lucide-react';

const TABS = [
  { id: 'text', label: 'Text', icon: FileText },
  { id: 'url', label: 'URL', icon: Link2 },
  { id: 'image', label: 'Image', icon: ImageIcon },
];

export default function Analyzer() {
  const [activeTab, setActiveTab] = useState('text');

  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const switchTab = (id) => {
    setActiveTab(id);
    setResult(null);
    setError('');
  };

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleAnalyze = async (e) => {
    e.preventDefault();
    setError('');
    setResult(null);

    if (activeTab === 'text' && !text.trim()) {
      setError('Please enter some text to analyze.');
      return;
    }
    if (activeTab === 'url' && !url.trim()) {
      setError('Please enter a URL to analyze.');
      return;
    }
    if (activeTab === 'image' && !file) {
      setError('Please upload an image to analyze.');
      return;
    }

    setLoading(true);
    try {
      let data;
      if (activeTab === 'text') data = await analyzeText(text);
      else if (activeTab === 'url') data = await analyzeUrl(url);
      else data = await analyzeImage(file);

      if (data.error) throw new Error(data.error);
      setResult(data);
    } catch (err) {
      setError(err.message || 'Error communicating with server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">Content Analyzer</h2>
        <p className="mt-4 text-lg text-slate-500">Choose a content type and run it through our AI detectors.</p>
      </div>

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-slate-100">
        {/* Tab bar */}
        <div className="flex border-b border-slate-200 bg-slate-50">
          {TABS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => switchTab(id)}
              className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-semibold transition-colors ${
                activeTab === id
                  ? 'text-blue-900 border-b-2 border-blue-900 bg-white'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <Icon className="w-5 h-5" />
              {label}
            </button>
          ))}
        </div>

        <div className="p-8">
          <form onSubmit={handleAnalyze} className="space-y-6">
            {activeTab === 'text' && (
              <div>
                <label htmlFor="text" className="block text-sm font-medium text-slate-700">Paste News Article Text</label>
                <div className="mt-1">
                  <textarea
                    id="text"
                    rows={8}
                    className="shadow-sm focus:ring-blue-900 focus:border-blue-900 block w-full sm:text-sm border-slate-300 rounded-md p-3 border"
                    placeholder="Paste article content here..."
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  />
                </div>
              </div>
            )}

            {activeTab === 'url' && (
              <div>
                <label htmlFor="url" className="block text-sm font-medium text-slate-700">Source URL</label>
                <div className="mt-1">
                  <input
                    type="url"
                    id="url"
                    className="shadow-sm focus:ring-blue-900 focus:border-blue-900 block w-full sm:text-sm border-slate-300 rounded-md p-3 border"
                    placeholder="https://example.com/news-article"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                  />
                </div>
              </div>
            )}

            {activeTab === 'image' && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Upload Image</label>
                <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-md hover:border-blue-900 transition-colors bg-slate-50">
                  <div className="space-y-1 text-center">
                    <UploadCloud className="mx-auto h-12 w-12 text-slate-400" />
                    <div className="flex text-sm text-slate-600 justify-center">
                      <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-900 hover:text-blue-700 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-900 px-2">
                        <span>Upload a file</span>
                        <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-slate-500">PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
                {preview && (
                  <div className="mt-4 flex justify-center">
                    <img src={preview} alt="Preview" className="max-h-64 rounded-md shadow-sm border" />
                  </div>
                )}
              </div>
            )}

            {error && (
              <div className="text-red-500 text-sm font-medium">{error}</div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 disabled:bg-blue-300 transition-colors"
              >
                {loading ? <Loader2 className="animate-spin w-6 h-6" /> : `Analyze ${TABS.find(t => t.id === activeTab).label}`}
              </button>
            </div>
          </form>
        </div>
      </div>

      {result && (
        <ResultCard
          prediction={result.prediction}
          score={result.fake_probability_score}
          explanation={result.explanation}
        />
      )}
    </div>
  );
}
