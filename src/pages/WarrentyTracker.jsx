import React, { useState } from 'react';
import { Search, ShieldCheck, ShieldX, Download, History, PlusCircle, AlertCircle } from 'lucide-react';
import { dummyWarranties } from '../data/dummyWarrenty'; // Import the dummy data

const WarrantyTracker = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = (e) => {
    e.preventDefault();
    const foundData = dummyWarranties[serialNumber];
    
    if (foundData) {
      setResult(foundData);
    } else {
      setResult('not_found');
    }
  };

  return (
    <section id="warranty" className="py-24 bg-slate-900 text-white rounded-[3rem] mx-4 lg:mx-8">
      <div className="max-w-5xl mx-auto px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">Warranty & Claims</h2>
          <p className="text-slate-400 font-medium italic">Try: REN-2026 or REN-EXPIRED</p>
        </div>

        {/* Search Input */}
        <form onSubmit={handleCheck} className="relative max-w-2xl mx-auto mb-16">
          <input 
            type="text" 
            placeholder="Enter Serial Number..."
            className="w-full bg-white/10 border border-white/20 rounded-2xl px-8 py-6 text-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 text-white transition-all"
            value={serialNumber}
            onChange={(e) => setSerialNumber(e.target.value.toUpperCase())}
          />
          <button className="absolute right-3 top-3 bottom-3 bg-emerald-500 text-slate-900 px-8 rounded-xl font-bold hover:bg-emerald-400 transition flex items-center gap-2">
            <Search size={20} /> Verify
          </button>
        </form>

        {/* Results Logic */}
        {result === 'not_found' && (
          <div className="flex items-center justify-center gap-3 text-red-400 bg-red-400/10 p-6 rounded-2xl border border-red-400/20 max-w-2xl mx-auto">
            <AlertCircle /> No records found for this serial number.
          </div>
        )}

        {result && result !== 'not_found' && (
          <div className="grid lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            
            {/* Main Warranty Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className={`p-8 rounded-3xl border ${result.isActive ? 'bg-emerald-500/10 border-emerald-500/20' : 'bg-red-500/10 border-red-500/20'}`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <div className={`flex items-center gap-2 font-black text-sm uppercase tracking-widest mb-2 ${result.isActive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {result.isActive ? <ShieldCheck size={18}/> : <ShieldX size={18}/>}
                      Warranty {result.isActive ? 'Active' : 'Expired'}
                    </div>
                    <h3 className="text-3xl font-black">{result.product}</h3>
                  </div>
                  {result.isActive && (
                    <button className="bg-white text-slate-900 p-3 rounded-xl hover:bg-emerald-400 transition">
                      <Download size={20} />
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/10">
                  <InfoItem label="Purchase Date" value={result.purchaseDate} />
                  <InfoItem label="Expiry Date" value={result.expiry} />
                  <InfoItem label="Days Left" value={result.daysLeft} highlight />
                </div>
              </div>

              {/* Claim History Table */}
              <div className="bg-white/5 rounded-3xl p-8 border border-white/10">
                <div className="flex items-center gap-2 mb-6 text-xl font-bold">
                  <History className="text-emerald-400" size={24} /> 
                  Claim History
                </div>
                {result.claims.length > 0 ? (
                  <div className="space-y-4">
                    {result.claims.map((claim) => (
                      <div key={claim.id} className="flex justify-between items-center p-4 bg-white/5 rounded-xl border border-white/5 hover:border-emerald-500/30 transition">
                        <div>
                          <p className="font-bold text-sm">{claim.type}</p>
                          <p className="text-xs text-slate-500">{claim.date} • ID: {claim.id}</p>
                        </div>
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-[10px] font-black uppercase">
                          {claim.status}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 text-sm italic">No claims have been filed for this product yet.</p>
                )}
              </div>
            </div>

            {/* Right Action Column */}
            <div className="space-y-6">
              <div className="bg-emerald-600 p-8 rounded-3xl text-slate-900">
                <h4 className="text-xl font-black mb-2">Need a Repair?</h4>
                <p className="text-sm font-medium mb-6 opacity-80">
                  If your system is underperforming, our technical team is ready to assist.
                </p>
                <button 
                  disabled={!result.isActive}
                  className={`w-full py-4 rounded-2xl font-black flex items-center justify-center gap-2 transition shadow-lg ${
                    result.isActive 
                    ? 'bg-slate-900 text-white hover:bg-slate-800' 
                    : 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <PlusCircle size={20} /> File New Claim
                </button>
              </div>
              
              <div className="bg-white/5 p-6 rounded-3xl border border-white/10">
                <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-4">Coverage Details</p>
                <p className="text-sm text-slate-300 leading-relaxed">{result.coverage}</p>
              </div>
            </div>

          </div>
        )}
      </div>
    </section>
  );
};

// Small Helper Component
const InfoItem = ({ label, value, highlight }) => (
  <div>
    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{label}</p>
    <p className={`text-lg font-bold ${highlight ? 'text-emerald-400' : 'text-white'}`}>{value}</p>
  </div>
);

export default WarrantyTracker;