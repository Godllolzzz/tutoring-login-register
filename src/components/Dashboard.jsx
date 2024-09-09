import React, { useState } from "react";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white h-full">
        <div className="flex items-center justify-center h-16 bg-blue-800 shadow-md">
          <h1 className="text-2xl font-bold">Tutoring</h1>
        </div>
        <nav className="mt-4">
          <ul>
            <li className="px-6 py-2 hover:bg-blue-700">
              <a href="#">Dashboard</a>
            </li>
            <li className="px-6 py-2 hover:bg-blue-700">
              <a href="#">My Classes</a>
            </li>
            <li className="px-6 py-2 hover:bg-blue-700">
              <a href="#">Students</a>
            </li>
            <li className="px-6 py-2 hover:bg-blue-700">
              <a href="#">Schedule</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <div className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
          <div className="text-2xl font-semibold">Dashboard</div>
          <div className="flex items-center space-x-4">
            <span className="font-semibold">Welcome, Tutor!</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Logout
            </button>
          </div>
        </div>

        {/* Main Dashboard Content */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-3 gap-4">
            {/* Dashboard Cards */}
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-xl font-semibold">Upcoming Classes</h2>
              <p className="mt-2">You have 3 upcoming classes today.</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-xl font-semibold">Total Students</h2>
              <p className="mt-2">You are currently tutoring 12 students.</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md">
              <h2 className="text-xl font-semibold">Tutor Schedule</h2>
              <p className="mt-2">Your next class starts at 3:00 PM.</p>
            </div>
          </div>

          {/* Other Dashboard Sections */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <div className="bg-white p-4 shadow-md rounded-md">
              <ul>
                <li>You just completed a class with John Doe.</li>
                <li>New student: Sarah signed up for Math tutoring.</li>
                <li>Class rescheduled with Jane Smith to 4:00 PM.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
