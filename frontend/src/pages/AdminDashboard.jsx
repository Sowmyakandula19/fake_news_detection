import React from 'react';
import { Activity, Users, Database, AlertTriangle } from 'lucide-react';

export default function AdminDashboard() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-3xl font-extrabold text-gray-900">Admin Overview</h2>
        <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-1.5 rounded-full">
          Live System Status: Operational
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {[
          { title: 'Total Scans', value: '14,239', icon: <Activity className="h-6 w-6 text-blue-500" /> },
          { title: 'Active Users', value: '1,045', icon: <Users className="h-6 w-6 text-green-500" /> },
          { title: 'Fake News Detected', value: '3,892', icon: <AlertTriangle className="h-6 w-6 text-red-500" /> },
          { title: 'Database Size', value: '1.4 GB', icon: <Database className="h-6 w-6 text-purple-500" /> },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex flex-col items-center justify-center text-center">
            <div className="mb-4 bg-gray-50 p-3 rounded-full">{stat.icon}</div>
            <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wide">{stat.title}</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="bg-white shadow-xl rounded-2xl overflow-hidden border border-gray-100 p-8">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Anomaly Reports</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source URL</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Risk Score</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action Required</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {[
                { date: '2023-11-28 14:32', url: 'infowars.com/breaking', score: '98%', action: 'None (Auto-flagged)' },
                { date: '2023-11-28 12:15', url: 'unknown-blog.net/secret', score: '72%', action: 'Manual Review' },
                { date: '2023-11-27 09:45', url: 'manipulated-image.jpg', score: '88%', action: 'None (Auto-flagged)' },
              ].map((row, i) => (
                <tr key={i}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">{row.url}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-bold">{row.score}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{row.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
