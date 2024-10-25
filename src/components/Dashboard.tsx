import React from 'react';
import { BarChart, CheckCircle, XCircle, Activity } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data for demonstration
  const completedTasks = 15;
  const pendingTasks = 7;
  const productivityScore = 85;

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-semibold mb-6">Task Completion Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-100 p-4 rounded-lg flex items-center">
          <CheckCircle size={40} className="text-green-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Completed Tasks</h3>
            <p className="text-3xl font-bold text-green-600">{completedTasks}</p>
          </div>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg flex items-center">
          <XCircle size={40} className="text-yellow-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Pending Tasks</h3>
            <p className="text-3xl font-bold text-yellow-600">{pendingTasks}</p>
          </div>
        </div>
        <div className="bg-blue-100 p-4 rounded-lg flex items-center">
          <Activity size={40} className="text-blue-500 mr-4" />
          <div>
            <h3 className="text-lg font-semibold">Productivity Score</h3>
            <p className="text-3xl font-bold text-blue-600">{productivityScore}%</p>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Weekly Task Completion</h3>
        <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-center">
          <BarChart size={200} className="text-gray-400" />
          <p className="text-gray-500 ml-4">Chart placeholder: Implement actual chart library for real data visualization</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;