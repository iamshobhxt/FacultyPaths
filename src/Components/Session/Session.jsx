import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle, Video, Plus } from 'lucide-react';

function Session() {
  const [sessions, setSessions] = useState([
    {
      id: 1,
      title: "Web Development Basics",
      date: "2025-10-05",
      time: "10:00 AM",
      duration: "2 hours",
      status: "completed",
      participants: 25,
      description: "HTML, CSS aur JavaScript ke fundamentals",
      formLink: "https://forms.gle/DKfBwDmvuNLJEaVv6" 
    },
    {
      id: 2,
      title: "React Fundamentals",
      date: "2025-10-08",
      time: "3:00 PM",
      duration: "2.5 hours",
      status: "completed",
      participants: 30,
      description: "React components, hooks aur state management",
      formLink: "https://forms.gle/DKfBwDmvuNLJEaVv6" 
    },
    {
      id: 3,
      title: "Advanced JavaScript",
      date: "2025-10-12",
      time: "11:00 AM",
      duration: "3 hours",
      status: "upcoming",
      participants: 15,
      description: "Async/await, Promises aur advanced concepts",
      formLink: "https://forms.gle/DKfBwDmvuNLJEaVv6" 
    },
    {
      id: 4,
      title: "Node.js Backend Development",
      date: "2025-10-15",
      time: "2:00 PM",
      duration: "2.5 hours",
      status: "upcoming",
      participants: 12,
      description: "Express, MongoDB aur REST API development",
      formLink: "https://forms.gle/DKfBwDmvuNLJEaVv6" 
    },
  ]);

  const handleJoinSession = (session) => {
    window.open(session.formLink, '_blank');
  };

  const handleOpenBooking = (session) => {
    window.open(session.formLink, '_blank');
  };

  const completedSessions = sessions.filter(s => s.status === 'completed');
  const upcomingSessions = sessions.filter(s => s.status === 'upcoming');

  return (
    <div className="min-h-screen my-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 mb-8 border-t-4 border-indigo-600">
          <h1 className="text-3xl md:text-5xl text-center font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
            OUR SESSIONS
          </h1>
          <p className="text-black text-center text-sm md:text-base">
            Apne sessions ko manage karein aur new sessions book karein
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8">
          <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-indigo-100 text-sm font-medium">Total Sessions</p>
                <p className="text-4xl font-bold mt-2">{sessions.length}</p>
              </div>
              <Calendar className="w-12 h-12 text-indigo-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100 text-sm font-medium">Completed</p>
                <p className="text-4xl font-bold mt-2">{completedSessions.length}</p>
              </div>
              <CheckCircle className="w-12 h-12 text-green-200" />
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg p-6 text-white transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100 text-sm font-medium">Upcoming</p>
                <p className="text-4xl font-bold mt-2">{upcomingSessions.length}</p>
              </div>
              <Clock className="w-12 h-12 text-orange-200" />
            </div>
          </div>
        </div>

        {/* Upcoming Sessions */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Clock className="w-7 h-7 text-orange-600" />
            Upcoming Sessions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {upcomingSessions.map(session => (
              <div key={session.id} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500 hover:shadow-2xl transition-all transform hover:-translate-y-1">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{session.title}</h3>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">Upcoming</span>
                </div>
                <p className="text-gray-600 mb-4">{session.description}</p>
                
                <div className="space-y-2 mb-5 bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-4 h-4 text-indigo-600" />
                    <span className="font-medium">{session.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4 text-indigo-600" />
                    <span className="font-medium">{session.time} • {session.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-4 h-4 text-indigo-600" />
                    <span className="font-medium">{session.participants} registered</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => handleJoinSession(session)}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-green-700 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Video className="w-5 h-5" />
                    Join Now
                  </button>
                  <button
                    onClick={() => handleOpenBooking(session)}
                    className="flex-1 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Plus className="w-5 h-5" />
                    Book Session
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Sessions */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-2">
            <CheckCircle className="w-7 h-7 text-green-600" />
            Completed Sessions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {completedSessions.map(session => (
              <div key={session.id} className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500 hover:shadow-xl transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{session.title}</h3>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">Completed</span>
                </div>
                <p className="text-gray-600 mb-4">{session.description}</p>
                
                <div className="space-y-2 mb-5 bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span className="font-medium">{session.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4 text-green-600" />
                    <span className="font-medium">{session.time} • {session.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-4 h-4 text-green-600" />
                    <span className="font-medium">{session.participants} attended</span>
                  </div>
                </div>

                <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <span className="text-green-700 font-semibold">Successfully Completed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Session;
