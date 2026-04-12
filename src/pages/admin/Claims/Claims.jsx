import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Clock } from 'lucide-react';

const Claims = () => {
  const [claims] = useState([
    { id: 'CLM-9901', customer: 'Ahmed Solar', product: 'Inverter 5kW', status: 'Pending', daysOpen: 3 },
    { id: 'CLM-9902', customer: 'Sara Tech', product: 'Battery 200Ah', status: 'Resolved', daysOpen: 1 },
  ]);

  return (
    <div className="p-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-black text-slate-950 mb-10">Warranty Claims</h1>
        
        <div className="grid grid-cols-1 gap-4">
          {claims.map((claim) => (
            <div key={claim.id} className="flex items-center justify-between bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-6">
                <div className={`p-3 rounded-full ${claim.status === 'Pending' ? 'bg-amber-50 text-amber-600' : 'bg-emerald-50 text-emerald-600'}`}>
                  {claim.status === 'Pending' ? <Clock size={20}/> : <CheckCircle size={20}/>}
                </div>
                <div>
                  <p className="font-bold text-lg">{claim.id} — <span className="text-slate-500">{claim.customer}</span></p>
                  <p className="text-sm text-slate-400 font-semibold">{claim.product}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs font-black uppercase text-slate-400">Status</p>
                <p className={`font-bold ${claim.status === 'Pending' ? 'text-amber-600' : 'text-emerald-600'}`}>
                  {claim.status} ({claim.daysOpen} days open)
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Claims;