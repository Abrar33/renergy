import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Zap, Menu, X } from "lucide-react";
import { AuthContext } from "../../Context/AuthContext"; // Import your context

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, role, logout } = useContext(AuthContext); // Access auth state

  return (
    <nav className="relative bg-white border-b border-slate-50 sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 md:px-8 py-5 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-emerald-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
            <Zap size={22} className="text-white fill-current" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-900">
            RENERGY
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 text-sm font-black uppercase tracking-widest text-slate-500">
          <a href="#about" className="hover:text-emerald-600 transition-colors">About</a>
          <a href="#warranty" className="hover:text-emerald-600 transition-colors">Warranty</a>
          <a href="#services" className="hover:text-emerald-600 transition-colors">Services</a>
        </div>

        {/* Desktop Auth Buttons / User State */}
        <div className="hidden md:flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-4">
              {/* Optional: Show role badge */}
              <span className="text-[10px] font-black uppercase text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
                {role || 'User'}
              </span>
              <button 
                onClick={logout}
                className="px-6 py-2.5 text-sm font-bold text-slate-700 hover:text-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link to="/login" className="px-6 py-2.5 text-sm font-bold text-slate-700 hover:text-emerald-600 transition-colors">Login</Link>
              <Link to="/signup" className="bg-slate-900 text-white px-7 py-3 rounded-2xl text-sm font-bold hover:bg-emerald-600 transition-all shadow-lg shadow-slate-200">Signup</Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-slate-600 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-col gap-4 text-center">
            <a href="#about" onClick={() => setIsOpen(false)} className="text-lg font-black text-slate-900 py-2 border-b border-slate-50">About</a>
            <a href="#warranty" onClick={() => setIsOpen(false)} className="text-lg font-black text-slate-900 py-2 border-b border-slate-50">Warranty</a>
            <a href="#services" onClick={() => setIsOpen(false)} className="text-lg font-black text-slate-900 py-2 border-b border-slate-50">Services</a>
          </div>

          <div className="flex flex-col gap-3">
            {user ? (
              <button onClick={() => { logout(); setIsOpen(false); }} className="w-full bg-red-50 text-red-600 py-4 rounded-2xl text-center font-black">
                Logout
              </button>
            ) : (
              <>
                <Link to="/signup" onClick={() => setIsOpen(false)} className="w-full bg-emerald-600 text-white py-4 rounded-2xl text-center font-black">Get Started</Link>
                <Link to="/login" onClick={() => setIsOpen(false)} className="w-full bg-slate-50 text-slate-900 py-4 rounded-2xl text-center font-black">Sign In</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;