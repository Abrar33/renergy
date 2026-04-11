const WizardHeader = ({ onBack, title }) => (
  <div className="w-full flex items-center gap-4 mb-8">
    <button 
      onClick={onBack} 
      className="p-2 hover:bg-slate-100 rounded-full transition-colors"
    >
      {/* Simple Arrow SVG */}
      <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
    </button>
    <div>
      <h1 className="text-xl font-black text-slate-900">{title}</h1>
      <p className="text-xs text-slate-400 uppercase tracking-widest">Inventory Management</p>
    </div>
  </div>
);

export default WizardHeader;