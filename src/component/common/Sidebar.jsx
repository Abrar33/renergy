import { useState } from 'react';
import { Zap, LayoutDashboard, Package, Users, Settings, LogOut, BarChart3, AlertCircle, Menu, X, ShoppingBag } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <>
      {/* Mobile Top Navigation Bar */}
      <header className="lg:hidden flex items-center justify-between p-4 bg-slate-950 text-white sticky top-0 z-30 shadow-md">
        <div className="flex items-center gap-2">
          <Zap size={22} className="text-emerald-400 fill-current" />
          <span className="text-lg font-black tracking-tighter">RENERGY</span>
        </div>
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 bg-slate-800 rounded-lg hover:bg-slate-700 transition"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      {/* Sidebar Overlay (Mobile Only) */}
      {isOpen && (
        <div 
          onClick={() => setIsOpen(false)} 
          className="lg:hidden fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        />
      )}

      {/* Sidebar Panel */}
      <aside className={`
        fixed lg:sticky top-0 left-0 z-50 
        w-72 h-screen bg-slate-900 text-white p-8 flex flex-col
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
      `}>
        {/* Desktop Brand Logo */}
        <div className="hidden lg:flex items-center gap-2 mb-12">
          <Zap size={24} className="text-emerald-400 fill-current" />
          <span className="text-xl font-black tracking-tighter">RENERGY</span>
        </div>

        {/* Navigation */}
        <nav onClick={() => setIsOpen(false)} className="space-y-2 flex-1">
          <NavItem to="/admin/dashboard" icon={<LayoutDashboard size={20}/>} label="Dashboard" active={pathname.includes('/admin/dashboard')} />
          <NavItem 
  to="/admin/products" 
  icon={<ShoppingBag size={20}/>} 
  label="Products Catalog" 
  active={pathname.includes('/admin/products')} 
/>
          <NavItem to="/admin/inventory" icon={<Package size={20}/>} label="Inventory" active={pathname.includes('/admin/inventory')} />
          <NavItem to="/admin/sales" icon={<BarChart3 size={20}/>} label="Sales" active={pathname.includes('/admin/sales')} />
          <NavItem to="/admin/claims" icon={<AlertCircle size={20}/>} label="Warranty Claims" active={pathname.includes('/admin/claims')} />
          <NavItem to="/admin/staff" icon={<Users size={20}/>} label="Staff" active={pathname.includes('/admin/staff')} />
          <NavItem to="/admin/settings" icon={<Settings size={20}/>} label="Settings" active={pathname.includes('/admin/settings')} />
        </nav>

        {/* Logout */}
        <button className="mt-auto flex items-center gap-3 text-slate-400 hover:text-white transition font-bold text-sm">
          <LogOut size={20} /> Logout
        </button>
      </aside>
    </>
  );
};

const NavItem = ({ icon, label, to, active }) => (
  <Link to={to} className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-bold text-sm ${
    active ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50' : 'text-slate-400 hover:bg-white/5 hover:text-white'
  }`}>
    {icon} {label}
  </Link>
);

export default Sidebar;