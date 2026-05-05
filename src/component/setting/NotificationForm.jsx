const NotificationForm = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <h3 className="font-bold text-slate-900 text-lg">Alert Preferences</h3>
    
    <div className="space-y-4">
      <ToggleItem 
        title="Low Stock Alerts" 
        desc="Notify me when products fall below their target threshold." 
        defaultChecked={true}
      />
      <ToggleItem 
        title="New Warranty Claim" 
        desc="Email me immediately when a customer files a claim." 
        defaultChecked={true}
      />
      <ToggleItem 
        title="Weekly Sales Report" 
        desc="Receive a summary of revenue every Monday morning." 
        defaultChecked={false}
      />
    </div>
  </div>
);

// Small helper for toggles
const ToggleItem = ({ title, desc, defaultChecked }) => (
  <div className="flex items-center justify-between p-4 hover:bg-slate-50 rounded-2xl transition-colors">
    <div className="flex-1">
      <p className="font-bold text-slate-900 text-sm">{title}</p>
      <p className="text-xs text-slate-500">{desc}</p>
    </div>
    <input type="checkbox" defaultChecked={defaultChecked} className="w-5 h-5 accent-emerald-600 cursor-pointer" />
  </div>
);
export default NotificationForm;