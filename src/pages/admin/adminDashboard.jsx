import React from 'react';
import Sidebar from '../../component/common/Sidebar';
// import StatCard from '../../component/common/Sidebar';
import { Package, Users, BarChart3, ArrowUpRight, Plus } from 'lucide-react';
const StatCard = ({ title, value, sub, icon, color }) => (
  <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all">
    <div className={`absolute top-0 right-0 w-24 h-24 ${color} opacity-5 -mr-8 -mt-8 rounded-full`}></div>
    
    <div className={`w-12 h-12 ${color} text-white rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-blue-100`}>
      {icon}
    </div>
    
    <p className="text-slate-400 text-xs font-black uppercase tracking-widest mb-1">{title}</p>
    <h4 className="text-3xl font-black text-slate-900 mb-1">{value}</h4>
    <p className="text-slate-500 text-xs font-medium">{sub}</p>
  </div>
);
const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar - Fixed on left */}
      <Sidebar />

      {/* Main Content Area */}
      <main className="flex-1 p-8">
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-3xl font-black text-slate-900">Admin Command Center</h1>
            <p className="text-slate-500 text-sm font-medium">Monitoring Renergy's ecosystem performance.</p>
          </div>
          <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl font-bold flex items-center gap-2 hover:bg-emerald-700 transition shadow-lg shadow-emerald-100">
            <Plus size={20} /> Add New Product
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <StatCard 
            title="Total Inventory" 
            value="1,284" 
            sub="Units across 12 warehouses" 
            icon={<Package size={24} />} 
            color="bg-blue-500"
          />
          <StatCard 
            title="Active Sellers" 
            value="42" 
            sub="+4 joined this month" 
            icon={<Users size={24} />} 
            color="bg-emerald-500"
          />
          <StatCard 
            title="Monthly Sales" 
            value="$428k" 
            sub="22% increase from Oct" 
            icon={<BarChart3 size={24} />} 
            color="bg-amber-500"
          />
        </div>

        {/* Inventory Section (Placeholder for Table) */}
        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-sm p-8">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold">Recent Inventory Updates</h3>
            <button className="text-emerald-600 font-bold text-sm flex items-center gap-1 hover:underline">
              View All <ArrowUpRight size={16} />
            </button>
          </div>
          
          <div className="overflow-x-auto">
             <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-50 text-slate-400 text-xs uppercase tracking-widest">
                    <th className="pb-4 font-black">Product Name</th>
                    <th className="pb-4 font-black">Stock</th>
                    <th className="pb-4 font-black">Price</th>
                    <th className="pb-4 font-black">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-50">
                    <td className="py-4 font-bold text-slate-900">Renergy Mono 450W</td>
                    <td className="py-4">850 Units</td>
                    <td className="py-4">$299.00</td>
                    <td className="py-4"><span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-bold">In Stock</span></td>
                  </tr>
                  <tr className="border-b border-slate-50">
                    <td className="py-4 font-bold text-slate-900">Smart Inverter Pro</td>
                    <td className="py-4">12 Units</td>
                    <td className="py-4">$1,450.00</td>
                    <td className="py-4"><span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">Low Stock</span></td>
                  </tr>
                </tbody>
             </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;