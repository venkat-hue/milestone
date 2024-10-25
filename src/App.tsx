import React, { useState } from 'react';
import { Calendar, CheckSquare, Briefcase } from 'lucide-react';
import TaskScheduler from './components/TaskScheduler';
import Dashboard from './components/Dashboard';
import CareerTracker from './components/CareerTracker';
import Login from './components/Login';

interface UserData {
  username: string;
  mobileNumber: string;
  email: string;
  password: string;
}

function App() {
  const [activeTab, setActiveTab] = useState('scheduler');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const handleLogin = (data: UserData) => {
    setIsLoggedIn(true);
    setUserData(data);
  };

  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">TaskMaster Pro</h1>
        <div className="text-sm">
          Welcome, {userData?.username} | <button onClick={() => setIsLoggedIn(false)} className="underline">Logout</button>
        </div>
      </header>
      <nav className="bg-white shadow-md">
        <ul className="flex justify-center space-x-4 p-2">
          <li>
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                activeTab === 'scheduler' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('scheduler')}
            >
              <Calendar size={20} />
              <span>Task Scheduler</span>
            </button>
          </li>
          <li>
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                activeTab === 'dashboard' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('dashboard')}
            >
              <CheckSquare size={20} />
              <span>Dashboard</span>
            </button>
          </li>
          <li>
            <button
              className={`flex items-center space-x-2 px-4 py-2 rounded-md ${
                activeTab === 'career' ? 'bg-blue-100 text-blue-600' : 'text-gray-600'
              }`}
              onClick={() => setActiveTab('career')}
            >
              <Briefcase size={20} />
              <span>Career Tracker</span>
            </button>
          </li>
        </ul>
      </nav>
      <main className="container mx-auto mt-8 p-4">
        {activeTab === 'scheduler' && <TaskScheduler />}
        {activeTab === 'dashboard' && <Dashboard />}
        {activeTab === 'career' && <CareerTracker />}
      </main>
    </div>
  );
}

export default App;