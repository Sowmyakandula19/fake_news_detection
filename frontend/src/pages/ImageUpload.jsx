import React, { useState } from 'react';
import { analyzeImage } from '../api/api';
import ResultCard from '../components/ResultCard';
import { Loader2, UploadCloud } from 'lucide-react';

export default function ImageUpload() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleAnalyze = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please upload an image first.');
      return;
    }
    setError('');
    setLoading(true);
    setResult(null);

    try {
      const data = await analyzeImage(file);
      setResult(data);
    } catch (err) {
      setError(err.message || 'Error communicating with server.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-extrabold text-gray-900">Image Forensics</h2>
        <p className="mt-4 text-lg text-gray-500">Upload a standalone image to detect deepfakes, splicing, or manipulation artifacts.</p>
      </div>

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="p-8">
          <form onSubmit={handleAnalyze} className="space-y-6">
            
            <div className="flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-400 transition-colors bg-gray-50">
              <div className="space-y-1 text-center">
                <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600 justify-center">
                  <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500 px-2">
                    <span>Upload a file</span>
                    <input id="file-upload" name="file-upload" type="file" className="sr-only" accept="image/*" onChange={handleFileChange} />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>

            {preview && (
              <div className="mt-4 flex justify-center">
                <img src={preview} alt="Preview" className="max-h-64 rounded-md shadow-sm border" />
              </div>
            )}

            {error && (
              <div className="text-red-500 text-sm transform transition-all">{error}</div>
            )}

            <div>
              <button
                type="submit"
                disabled={loading || !file}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 transition-colors"
              >
                {loading ? <Loader2 className="animate-spin w-6 h-6" /> : 'Run Image Forensics'}
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
