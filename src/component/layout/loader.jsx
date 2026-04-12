import React from 'react';
import { Zap } from 'lucide-react';

const Loader = () => (
  <div className="flex flex-col items-center justify-center h-screen w-full bg-slate-50">
    <div className="relative">
      {/* Outer Pulse */}
      <div className="absolute inset-0 animate-ping rounded-full bg-emerald-400 opacity-20"></div>
      {/* Icon */}
      <Zap size={40} className="text-emerald-600 animate-pulse" />
    </div>
    <p className="mt-4 text-slate-400 font-bold tracking-widest text-xs uppercase">Loading Renergy...</p>
  </div>
);

export default Loader;