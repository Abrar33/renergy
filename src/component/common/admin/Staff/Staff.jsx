import React, { useState } from 'react';
import { Mail, Briefcase, BarChart3, MessageSquareWarning, ChevronRight } from 'lucide-react';

const Staff = () => {
  const [staff] = useState([
    { id: 1, name: 'Abrar Ahmed', email: 'abrar@renergy.com', role: 'Lead Developer', department: 'Engineering', status: 'Active', sales: 12, complaints: 1 },
    { id: 2, name: 'John Doe', email: 'john@renergy.com', role: 'Logistics Manager', department: 'Operations', status: 'Active', sales: 8, complaints: 3 },
    { id: 3, name: 'Sara Khan', email: 'sara@renergy.com', role: 'Sales Exec', department: 'Growth', status: 'Inactive', sales: 25, complaints: 0 },
  ]);

  return (
    <div className="p-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-center mb-10 pb-6 border-b border-slate-200">
          <div>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Internal Management</p>
            <h1 className="text-4xl font-black text-slate-950 tracking-tighter">Team & Performance</h1>
          </div>
          <button className="flex items-center gap-2.5 bg-emerald-600 text-white px-7 py-3.5 rounded-2xl font-black hover:bg-emerald-700 transition shadow-xl shadow-emerald-600/20 active:scale-95">
            + Add New Member
          </button>
        </div>

        {/* Search Bar - More Refined */}
        <div className="relative mb-8 max-w-sm">
          <input 
            placeholder="Search team..." 
            className="w-full p-4 pl-12 bg-white border border-slate-100 rounded-2xl outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10 shadow-sm"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
        </div>

        {/* Main Table - Redesigned as List Items */}
        <div className="space-y-4">
          {staff.map((member) => (
            <div key={member.id} className="grid grid-cols-12 items-center bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:border-emerald-100 hover:shadow-lg transition-all duration-300 group">
              
              {/* Profile Block */}
              <div className="col-span-4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center font-black text-xl uppercase tracking-widest border-4 border-slate-100 shadow-inner">
                  {member.name.split(' ').map(n=>n[0]).join('')}
                </div>
                <div>
                  <p className="text-xl font-bold text-slate-950 tracking-tight">{member.name}</p>
                  <p className="flex items-center gap-1.5 text-xs text-slate-400 font-semibold tracking-wide"><Mail size={13} className="text-slate-300"/> {member.email}</p>
                </div>
              </div>

              {/* Role & Dept Block */}
              <div className="col-span-3 space-y-1">
                <div className="flex items-center gap-2 text-slate-700 font-semibold">
                  <Briefcase size={16} className="text-slate-300"/> {member.role}
                </div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{member.department}</p>
              </div>

              {/* Status & Metrics Block */}
              <div className="col-span-4 flex items-center justify-end gap-6 text-right">
                <div className="space-y-1">
                    <p className="text-xs text-slate-400 font-black uppercase tracking-widest">Perf. KPI</p>
                    <div className="flex gap-2">
                        <MetricBadge icon={<BarChart3 size={14}/>} value={member.sales} label="Sales" color="emerald" />
                        <MetricBadge icon={<MessageSquareWarning size={14}/>} value={member.complaints} label="Alerts" color="amber" />
                    </div>
                </div>
                
                <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase ${
                  member.status === 'Active' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-600'
                }`}>
                  {member.status}
                </span>
              </div>

              {/* Action */}
              <div className="col-span-1 text-right">
                <button className="p-3 text-slate-300 group-hover:text-emerald-600 transition hover:bg-emerald-50 rounded-full">
                  <ChevronRight size={22} />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

// Reusable Metric Badge Component for visual consistency
const MetricBadge = ({ icon, value, label, color }) => (
    <div className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
        color === 'emerald' ? 'bg-emerald-50 border-emerald-100 text-emerald-700' : 'bg-amber-50 border-amber-100 text-amber-700'
    }`}>
        {icon}
        <span className="font-black">{value}</span>
        <span className="text-xs font-medium text-slate-400">| {label}</span>
    </div>
)

export default Staff;