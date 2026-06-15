import axios from 'axios';

const API_BASE_URL = (import.meta.env.VITE_API_URL || 'http://localhost:8000') + '/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const analyzeText = async (text) => {
  const response = await api.post('/text/analyze', { text });
  return response.data;
};

export const analyzeUrl = async (url) => {
  const response = await api.post('/url/analyze', { url });
  return response.data;
};

export const analyzeImage = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  const response = await api.post('/image/analyze', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export const analyzeCombined = async (text, url, file) => {
  const formData = new FormData();
  if (text) formData.append('text', text);
  if (url) formData.append('url', url);
  if (file) formData.append('image', file);

  const response = await api.post('/combined/analyze', formData, {
    headers: { 'Content-Type': 'multipart/form-data' },
  });
  return response.data;
};

export default api;
