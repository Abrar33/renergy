import React, { useState } from 'react';
import { Search, ShieldCheck, ShieldX, Download, History, PlusCircle, AlertCircle } from 'lucide-react';
import { dummyWarranties } from '../../data/dummyWarrenty'; 
import { useNavigate } from 'react-router-dom';

const WarrantyChecker = () => {
  const [serialNumber, setSerialNumber] = useState('');
  const [result, setResult] = useState(null);
const navigate=useNavigate();
  const handleCheck = (e) => {
    e.preventDefault();
    const foundData = dummyWarranties[serialNumber.trim()];
    setResult(foundData || 'not_found');
  };
const handleClaim = () => {
  if (result && result.isActive) {
    alert("Redirecting to claim submission...");
    // Here you would typically navigate to the claim submission page
    navigate('/new-claim');
  }}
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <section className="max-w-6xl mx-auto bg-slate-900 text-white rounded-[2.5rem] p-6 md:p-16 shadow-2xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">Warranty Portal</h2>
          <p className="text-slate-400 font-medium tracking-wide italic">
            Try: <span className="text-emerald-400 font-bold">REN-2026</span>
          </p>
        </div>

        {/* Search */}
        <form onSubmit={handleCheck} className="relative max-w-xl mx-auto mb-16">
          <div className="flex flex-col md:flex-row gap-3">
            <input 
              type="text" 
              placeholder="Enter Serial Number..."
              className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-5 text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 transition-all uppercase placeholder:normal-case"
              value={serialNumber}
              onChange={(e) => setSerialNumber(e.target.value.toUpperCase())}
            />
            <button className="md:absolute md:right-2 md:top-2 md:bottom-2 bg-emerald-500 text-slate-900 px-8 py-4 md:py-0 rounded-xl font-black hover:bg-emerald-400 transition-all active:scale-95">
              Verify
            </button>
          </div>
        </form>

        {/* Results */}
        {result === 'not_found' && (
          <div className="flex items-center justify-center gap-3 bg-red-500/10 border border-red-500/20 p-6 rounded-2xl text-red-400 animate-pulse">
            <AlertCircle size={24} />
            <p className="font-bold">Serial Number not recognized.</p>
          </div>
        )}

        {result && result !== 'not_found' && (
          <div className="grid lg:grid-cols-3 gap-8 animate-in fade-in slide-in-from-bottom-5 duration-700">
            
            {/* Left Column: Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className={`p-8 rounded-[2rem] border ${result.isActive ? 'bg-emerald-500/5 border-emerald-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
                <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
                  <div>
                    <span className={`inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] mb-3 ${result.isActive ? 'text-emerald-400' : 'text-red-400'}`}>
                      {result.isActive ? <ShieldCheck size={14}/> : <ShieldX size={14}/>}
                      Status: {result.isActive ? 'Active' : 'Expired'}
                    </span>
                    <h3 className="text-3xl font-black">{result.product}</h3>
                  </div>
                  {result.isActive && (
                    <button className="h-12 w-12 bg-white text-slate-900 rounded-xl flex items-center justify-center hover:bg-emerald-400 transition">
                      <Download size={20} />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                  <StatItem label="Purchased" value={result.purchaseDate} />
                  <StatItem label="Expires" value={result.expiry} />
                  <StatItem label="Days Left" value={result.daysLeft} color={result.isActive ? 'text-emerald-400' : 'text-red-400'} />
                </div>
              </div>

              {/* Claims Table */}
              <div className="bg-white/5 rounded-[2rem] p-8 border border-white/10">
                <h4 className="flex items-center gap-2 text-xl font-black mb-6">
                  <History className="text-emerald-400" size={24} /> Claim History
                </h4>
                <div className="space-y-4">
                  {result.claims.map((c) => (
                    <div key={c.id} className="flex flex-col sm:flex-row justify-between p-5 bg-white/5 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-all gap-4">
                      <div>
                        <p className="font-black text-slate-200">{c.type}</p>
                        <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{c.date} • {c.id}</p>
                      </div>
                      <span className="w-fit px-4 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-[10px] font-black uppercase">
                        {c.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Actions */}
            <div className="space-y-6">
              <div className="bg-emerald-600 p-8 rounded-[2rem] text-slate-900">
                <h4 className="text-2xl font-black mb-2">Need Help?</h4>
                <p className="text-sm font-bold opacity-80 mb-8 leading-relaxed">
                  Fast-track your support request with our 48-hour response guarantee.
                </p>
                <button 
                onClick={handleClaim}
                  disabled={!result.isActive}
                  className="w-full bg-slate-900 text-white py-5 rounded-2xl font-black flex items-center justify-center gap-2 hover:bg-slate-800 transition disabled:bg-slate-800/20 disabled:text-slate-900/40"
                >
                  <PlusCircle size={20} /> New Claim
                </button>
              </div>

              <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4">Plan Details</p>
                <p className="text-sm text-slate-300 leading-relaxed font-medium italic">
                  "{result.coverage}"
                </p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

const StatItem = ({ label, value, color = "text-white" }) => (
  <div>
    <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">{label}</p>
    <p className={`text-lg font-bold ${color}`}>{value}</p>
  </div>
);

export default WarrantyChecker;