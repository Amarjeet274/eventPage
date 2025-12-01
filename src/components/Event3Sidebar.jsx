import React from 'react';
import { 
  FiGrid, FiMessageSquare, FiUsers, FiActivity, 
  FiAward, FiCalendar, FiUser, FiSettings 
} from 'react-icons/fi';

const Event3sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: <FiGrid /> },
    { name: 'Chat', icon: <FiMessageSquare /> },
    { name: 'Employees', icon: <FiUsers /> },
    { name: 'Feed', icon: <FiActivity /> },
    { name: 'Recognition', icon: <FiAward /> },
    { name: 'Event', icon: <FiCalendar />, active: true },
    { name: 'Profile', icon: <FiUser /> },
    { name: 'Settings', icon: <FiSettings /> },
  ];

  return (
    <div className="w-64 bg-[#5865F2] text-white flex flex-col h-screen fixed left-0 top-0 overflow-y-auto z-50">
      {/* Logo Area */}
      <div className="p-6">
        <h1 className="text-2xl font-bold italic text-yellow-400">HRMS</h1>
        <p className="text-[10px] opacity-70">Human Resource Management System</p>
      </div>

      {/* User Profile */}
      <div className="px-6 mb-8 flex items-center gap-3">
        <img 
          src="https://i.pravatar.cc/150?img=5" 
          alt="User" 
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <div>
          <h4 className="font-semibold text-sm">Maria</h4>
          <p className="text-xs opacity-70">HR Manager</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-center gap-4 px-6 py-4 cursor-pointer hover:bg-white/10 transition-colors ${item.active ? 'bg-white/20 border-l-4 border-white' : ''}`}
          >
            <span className="text-xl">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </nav>
    </div>
  );
};

export default Event3sidebar;