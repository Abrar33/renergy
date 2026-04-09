import { Zap, LayoutDashboard, Package, Users, Settings, LogOut } from 'lucide-react';

const Sidebar = () => (
  <aside className="w-72 bg-slate-900 text-white p-8 flex flex-col">
    <div className="flex items-center gap-2 mb-12">
      <Zap size={24} className="text-emerald-400 fill-current" />
      <span className="text-xl font-black tracking-tighter">RENERGY</span>
    </div>

    <nav className="space-y-2 flex-1">
      <NavItem icon={<LayoutDashboard size={20}/>} label="Dashboard" active />
      <NavItem icon={<Package size={20}/>} label="Inventory" />
      <NavItem icon={<Users size={20}/>} label="Sellers" />
      <NavItem icon={<Settings size={20}/>} label="Settings" />
    </nav>

    <button className="mt-auto flex items-center gap-3 text-slate-400 hover:text-white transition font-bold text-sm">
      <LogOut size={20} /> Logout
    </button>
  </aside>
);

const NavItem = ({ icon, label, active = false }) => (
  <div className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all font-bold text-sm ${
    active ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
  }`}>
    {icon} {label}
  </div>
);

export default Sidebar;