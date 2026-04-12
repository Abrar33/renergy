import React, { useState } from 'react';
import { Package, AlertTriangle, Plus, Minus } from 'lucide-react';

const Inventory = () => {
  const [items] = useState([
    { id: 1, name: 'Solar Panel 450W', sku: 'SLR-450-WH', stock: 42, threshold: 50, category: 'Panels' },
    { id: 2, name: 'Inverter 5kW', sku: 'INV-5KW-LX', stock: 8, threshold: 10, category: 'Inverters' },
    { id: 3, name: 'Battery 200Ah', sku: 'BAT-200-AG', stock: 120, threshold: 20, category: 'Batteries' },
  ]);

  return (
    <div className="p-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-black text-slate-950 tracking-tighter">Inventory Stock</h1>
            <p className="text-slate-500 font-medium">Manage warehouse levels and supply thresholds.</p>
          </div>
          <button className="bg-emerald-600 text-white px-7 py-3.5 rounded-2xl font-black hover:bg-emerald-700 transition">
            + New Product
          </button>
        </div>

        {/* Inventory List */}
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="grid grid-cols-12 items-center bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
              
              {/* Product Info */}
              <div className="col-span-5 flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-400">
                  <Package size={24} />
                </div>
                <div>
                  <p className="text-lg font-bold text-slate-950">{item.name}</p>
                  <p className="text-xs text-slate-400 font-bold uppercase">{item.sku}</p>
                </div>
              </div>

              {/* Stock Meter */}
              <div className="col-span-4">
                <div className="flex justify-between text-xs font-black mb-2 uppercase tracking-widest">
                  <span className={item.stock < item.threshold ? "text-amber-600" : "text-slate-500"}>
                    {item.stock} Units In Stock
                  </span>
                  <span className="text-slate-300">Target: {item.threshold}</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.stock < item.threshold ? 'bg-amber-500' : 'bg-emerald-500'}`} 
                    style={{ width: `${(item.stock / (item.threshold * 2)) * 100}%` }}
                  />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="col-span-3 flex justify-end gap-2">
                {item.stock < item.threshold && (
                  <span className="flex items-center gap-1 text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-[10px] font-black uppercase">
                    <AlertTriangle size={12} /> Low Stock
                  </span>
                )}
                <button className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100"><Minus size={18}/></button>
                <button className="p-3 bg-slate-50 rounded-xl hover:bg-slate-100"><Plus size={18}/></button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;