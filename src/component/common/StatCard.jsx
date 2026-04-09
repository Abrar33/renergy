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

export default StatCard;