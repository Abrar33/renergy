import { Zap, LayoutDashboard, Package, Users, Settings, LogOut, BarChart3 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Get current path to determine active state

  return (
    <aside className="w-72 bg-slate-900 text-white p-8 flex flex-col h-screen">
      <div className="flex items-center gap-2 mb-12">
        <Zap size={24} className="text-emerald-400 fill-current" />
        <span className="text-xl font-black tracking-tighter">RENERGY</span>
      </div>

      <nav className="space-y-2 flex-1">
        <NavItem to="/admin/dashboard" icon={<LayoutDashboard size={20}/>} label="Dashboard" active={location.pathname === '/dashboard'} />
        <NavItem to="/admin/inventory" icon={<Package size={20}/>} label="Inventory" active={location.pathname === '/inventory'} />
        <NavItem to="/admin/sales" icon={<BarChart3 size={20}/>} label="Sales" active={location.pathname === '/admin/sales'} />
        <NavItem to="/admin/staff" icon={<Users size={20}/>} label="Staff" active={location.pathname === '/staff'} />
        <NavItem to="/settings" icon={<Settings size={20}/>} label="Settings" active={location.pathname === '/settings'} />
      </nav>

      <button className="mt-auto flex items-center gap-3 text-slate-400 hover:text-white transition font-bold text-sm">
        <LogOut size={20} /> Logout
      </button>
    </aside>
  );
};

const NavItem = ({ icon, label, to, active }) => (
  <Link to={to} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
    active ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:bg-white/5 hover:text-white'
  }`}>
    {icon} {label}
  </Link>
);
export default Sidebar;