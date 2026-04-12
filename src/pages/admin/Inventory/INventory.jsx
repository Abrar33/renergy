import React, { useState } from 'react';
import { Package, AlertTriangle, Plus, Minus } from 'lucide-react';

const Inventory = () => {
  const [items] = useState([
    { id: 1, name: 'Solar Panel 450W', sku: 'SLR-450-WH', stock: 42, threshold: 50, category: 'Panels' },
    { id: 2, name: 'Inverter 5kW', sku: 'INV-5KW-LX', stock: 8, threshold: 10, category: 'Inverters' },
    { id: 3, name: 'Battery 200Ah', sku: 'BAT-200-AG', stock: 120, threshold: 20, category: 'Batteries' },
  ]);

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-950 tracking-tighter">Inventory</h1>
          <p className="text-slate-500 font-medium text-sm">Manage stock levels and supply thresholds.</p>
        </div>
        <button className="bg-emerald-600 text-white px-6 py-3 rounded-2xl font-black hover:bg-emerald-700 transition w-full sm:w-auto">
          + New Product
        </button>
      </div>

      {/* Inventory List */}
      <div className="space-y-4">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="bg-white p-5 md:p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all 
                       grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
          >
            
            {/* Product Info - Takes 6/12 columns on desktop */}
            <div className="md:col-span-6 flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400 shrink-0">
                <Package size={24} />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-slate-950 truncate">{item.name}</p>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-wider">{item.sku}</p>
              </div>
            </div>

            {/* Stock Meter - Takes 3/12 columns on desktop */}
            <div className="md:col-span-3 w-full">
              <div className="flex justify-between text-[10px] font-black mb-2 uppercase tracking-widest">
                <span className={item.stock < item.threshold ? "text-amber-600" : "text-slate-500"}>
                  {item.stock} in stock
                </span>
                <span className="text-slate-300">Target: {item.threshold}</span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${item.stock < item.threshold ? 'bg-amber-500' : 'bg-emerald-500'}`} 
                  style={{ width: `${Math.min((item.stock / (item.threshold * 2)) * 100, 100)}%` }}
                />
              </div>
            </div>

            {/* Quick Actions - Takes 3/12 columns on desktop */}
            <div className="md:col-span-3 flex items-center justify-between md:justify-end gap-4">
              {item.stock < item.threshold && (
                <span className="flex items-center gap-1 text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-[10px] font-black uppercase shrink-0">
                  <AlertTriangle size={12} /> Low
                </span>
              )}
              <div className="flex gap-2">
                <button className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100 text-slate-600 transition">
                  <Minus size={18}/>
                </button>
                <button className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100 text-slate-600 transition">
                  <Plus size={18}/>
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Inventory;