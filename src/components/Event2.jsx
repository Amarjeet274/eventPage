import React from 'react';
import { FiCalendar, FiClock, FiVideo, FiGlobe } from "react-icons/fi";

const Event2 = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-white p-10 gap-20">
      
      {/* --- Left Column: Event Details --- */}
      <div className="flex-1 max-w-lg pt-10">
        
        {/* Host Avatar */}
        <div className="mb-6">
          <img 
            src="https://i.pravatar.cc/150?img=5" 
            alt="Host" 
            className="w-16 h-16 rounded-full object-cover shadow-sm"
          />
        </div>

        {/* Title Section */}
        <div className="mb-8">
          <p className="text-gray-500 text-sm font-medium mb-1">Account name</p>
          <h1 className="text-3xl font-bold text-gray-900">Event title</h1>
        </div>

        {/* Event Details List */}
        <div className="space-y-5 text-gray-600">
          
          <div className="flex items-start gap-4">
            <FiCalendar className="text-xl mt-0.5 shrink-0" />
            <span className="font-medium text-gray-700">19:00 - 19:45, Monday, August 19, 2024</span>
          </div>

          <div className="flex items-center gap-4">
            <FiClock className="text-xl shrink-0" />
            <span className="font-medium text-gray-700">30 min</span>
          </div>

          <div className="flex items-start gap-4">
            <FiVideo className="text-xl mt-0.5 shrink-0" />
            <span className="font-medium text-gray-700">Web conferencing details provided upon confirmation.</span>
          </div>

          <div className="flex items-center gap-4">
            <FiGlobe className="text-xl shrink-0" />
            <span className="font-medium text-gray-700">Asia/Yerevan</span>
          </div>

        </div>
      </div>

      {/* --- Right Column: Booking Form --- */}
      <div className="flex-1 max-w-lg pt-10">
        <h2 className="text-2xl font-bold mb-10 text-gray-900">Fill Your Details here -</h2>

        <div className="bg-white">
          <h3 className="text-lg font-bold mb-4 text-gray-800">Enter details</h3>

          <form className="space-y-6">
            
            {/* Name Input */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
              <input 
                type="text" 
                placeholder="Khatchadour" 
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
              <input 
                type="email" 
                placeholder="kh.israelyan@gmail.com" 
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
              />
            </div>

            {/* Terms Text */}
            <p className="text-xs text-gray-500 leading-relaxed">
              By proceeding, you confirm that you have read and agree to <a href="#" className="text-blue-600 font-semibold hover:underline">Calendly's Terms of Use</a> and <a href="#" className="text-blue-600 font-semibold hover:underline">Privacy Notice</a>.
            </p>

            {/* Submit Button */}
            <button 
              type="button"
              className="bg-[#0066FF] text-white font-bold py-3 px-8 rounded-full hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>

          </form>
        </div>
      </div>

    </div>
  );
};

export default Event2;