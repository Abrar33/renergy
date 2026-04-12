import React, { useState } from 'react';
import { Search, Filter, Download } from 'lucide-react';

const Sales = () => {
  const [sales] = useState([
    { id: 'INV-001', customer: 'Ali Solar Corp', amount: '12,500', status: 'Completed', date: '2026-04-10' },
    { id: 'INV-002', customer: 'GreenHome Ltd', amount: '8,200', status: 'Pending', date: '2026-04-11' },
    { id: 'INV-003', customer: 'Industrial Power', amount: '45,000', status: 'Completed', date: '2026-04-12' },
  ]);

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black text-slate-950">Sales History</h1>
          <button className="flex items-center gap-2 bg-white border border-slate-200 px-5 py-2.5 rounded-xl font-bold hover:bg-slate-50">
            <Download size={18} /> Export CSV
          </button>
        </div>

        {/* Filter Bar */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 bg-white p-2 rounded-xl border border-slate-200 flex items-center gap-2">
            <Search className="text-slate-400 ml-2" size={20} />
            <input className="w-full outline-none p-1" placeholder="Search by Invoice ID or Customer..." />
          </div>
          <button className="flex items-center gap-2 bg-white px-5 py-3 rounded-xl border border-slate-200 font-bold text-slate-600">
            <Filter size={18} /> Filter Status
          </button>
        </div>

        {/* Sales Table */}
        <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-[10px] uppercase tracking-widest font-bold">
              <tr>
                <th className="p-6">Invoice ID</th>
                <th className="p-6">Customer</th>
                <th className="p-6">Date</th>
                <th className="p-6 text-right">Amount (PKR)</th>
                <th className="p-6">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {sales.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50">
                  <td className="p-6 font-bold text-slate-900">{s.id}</td>
                  <td className="p-6">{s.customer}</td>
                  <td className="p-6">{s.date}</td>
                  <td className="p-6 text-right font-black text-slate-950">Rs. {s.amount}</td>
                  <td className="p-6">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase ${
                      s.status === 'Completed' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {s.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sales;