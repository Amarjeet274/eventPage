import React from 'react';
import { 
  FiClock, FiVideo, FiCalendar, FiGlobe, 
  FiChevronLeft, FiChevronRight 
} from 'react-icons/fi';

const EventCard = ({ avatar, name, title }) => {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-3 mb-2">
        <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover" />
      </div>
      <p className="text-gray-500 text-sm mb-1">Account name</p>
      <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>

      <div className="space-y-3 text-gray-500 text-sm mb-6">
        <div className="flex items-center gap-3">
          <FiClock className="text-lg" />
          <span>30 min</span>
        </div>
        <div className="flex items-start gap-3">
          <FiVideo className="text-lg mt-1" />
          <span>Web conferencing details provided upon confirmation.</span>
        </div>
        <div className="flex items-center gap-3">
          <FiCalendar className="text-lg" />
          <span>19:00 - 19:45, Monday, August 19, 2024</span>
        </div>
        <div className="flex items-center gap-3">
          <FiGlobe className="text-lg" />
          <span>Asia/Yerevan</span>
        </div>
      </div>

      <button className="bg-[#0066FF] text-white px-8 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
        Join Event
      </button>
    </div>
  );
};

const CalendarSection = () => {
  const timeSlots = [
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30", 
    "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"
  ];
  const days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
  const dates = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Calendar Area */}
      <div className="flex-1">
        <h3 className="text-lg font-bold mb-6">Select a Date & Time</h3>
        
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6">
          <div className="flex justify-between items-center mb-6">
            <button className="p-2 hover:bg-gray-100 rounded-full"><FiChevronLeft /></button>
            <span className="font-semibold">April 2024</span>
            <button className="p-2 bg-blue-50 text-blue-600 rounded-full"><FiChevronRight /></button>
          </div>

          <div className="grid grid-cols-7 text-center text-xs text-gray-400 mb-4">
            {days.map(d => <div key={d}>{d}</div>)}
          </div>

          <div className="grid grid-cols-7 text-center gap-y-4 text-sm text-gray-600">
            {dates.map(date => (
              <div key={date} className="flex justify-center">
                <span className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer 
                  ${date === 24 ? 'bg-blue-600 text-white' : 
                    date === 23 || date === 25 || date === 26 || date === 29 || date === 30 ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}`}>
                  {date}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
            <h4 className="font-bold text-sm mb-2">Time zone</h4>
            <div className="flex items-center gap-2 text-sm text-gray-600">
                <FiGlobe />
                <span>Central European Time (8:11pm)</span>
            </div>
        </div>

        <button className="bg-[#0066FF] text-white w-full py-3 rounded-full font-bold shadow-lg shadow-blue-200">
            Schedule New Event
        </button>
      </div>

      {/* Time Slots Column */}
      <div className="w-48 pt-10">
        <p className="text-xs text-gray-400 mb-4 text-right">Thursday, August 23</p>
        <div className="space-y-3 h-[500px] overflow-y-auto pr-2 custom-scrollbar">
            {timeSlots.map((time, idx) => (
                <button key={idx} className="w-full py-2 border border-blue-200 text-blue-600 rounded-lg text-sm font-semibold hover:bg-blue-50 transition">
                    {time}
                </button>
            ))}
        </div>
      </div>
    </div>
  );
};

const Event3 = () => {
  return (
    <div className="flex-1 pl-10 pt-10 flex flex-col xl:flex-row gap-10 bg-white min-h-screen">
      
      {/* Left Column: Event Lists */}
      <div className="flex-1 max-w-xl">
        <h2 className="text-3xl font-extrabold mb-10">Event Listes -</h2>
        
        <EventCard 
          avatar="https://i.pravatar.cc/150?img=32" 
          name="Alice" 
          title="Event title" 
        />
         <EventCard 
          avatar="https://i.pravatar.cc/150?img=12" 
          name="Bob" 
          title="Event title" 
        />
      </div>

      {/* Right Column: Calendar & Time */}
      <div className="flex-1">
        <CalendarSection />
      </div>
      
    </div>
  );
}

export default Event3;