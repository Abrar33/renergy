import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
      <Link to="/" className="flex items-center gap-2">
        <div className="bg-emerald-600 p-2 rounded-lg">
          <Zap size={22} className="text-white" />
        </div>
        <span className="text-xl font-bold">RENERGY</span>
      </Link>

      <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-600">
        <a href="#about">About</a>
        <a href="#warranty">Warranty</a>
        <a href="#services">Services</a>
      </div>

      <div className="flex gap-3">
        <Link to="/login" className="px-4 py-2 text-sm font-semibold">
          Login
        </Link>
        <Link
          to="/signup"
          className="bg-black text-white px-5 py-2 rounded-full text-sm"
        >
          Signup
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;