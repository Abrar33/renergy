import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../common/Sidebar';

const DashboardLayout = () => {
  return (
    // Change: use 'min-h-screen' and 'flex-col' for mobile, 'h-screen' and 'flex-row' for desktop
    <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50 font-sans">
      
      {/* Sidebar - Remains handled by its own responsive logic */}
      <Sidebar />
      
      {/* Main Content */}
      <main className="flex-1 w-full">
        {/* Responsive padding */}
        <div className="p-4 md:p-8 lg:p-12 mx-auto max-w-7xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
};
export default DashboardLayout;