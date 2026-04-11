import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../common/Sidebar';

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar remains fixed */}
      <Sidebar />
      
      {/* The 'Outlet' component renders the current child route */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;