import React, { useContext, useState } from 'react';
import { AuthContext } from "../../Context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { Zap, Mail, Lock, ArrowRight } from 'lucide-react';

const Login = () => {
  // --- Your Existing Logic ---
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent page refresh on form submit
    const user = login(email, password);

    if (!user) return alert("Invalid credentials");

    if (user.role === "admin") {
      navigate("/admin/dashboard");
    } else if (user.role === "seller") {
      navigate("/seller/dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="min-h-screen flex bg-white font-sans">
      {/* Left Side: Login Form */}
      <div className="flex-1 flex flex-col justify-center px-8 lg:px-24">
        <div className="max-w-md w-full mx-auto">
          
          {/* Logo */}
          <div 
            onClick={() => navigate("/")} 
            className="flex items-center gap-2 mb-10 group cursor-pointer"
          >
            <div className="bg-emerald-600 p-2 rounded-lg text-white">
              <Zap size={24} fill="currentColor" />
            </div>
            <span className="text-2xl font-black tracking-tighter">RENERGY</span>
          </div>

          <h2 className="text-4xl font-black mb-2 text-slate-900">Welcome back.</h2>
          <p className="text-slate-500 mb-8">Enter your credentials to manage your solar assets.</p>

          <form className="space-y-5" onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="email" 
                  required
                  value={email}
                  placeholder="name@renergy.com"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:outline-none transition-all"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <label className="text-sm font-bold text-slate-700 uppercase tracking-wider">
                  Password
                </label>
                <button type="button" className="text-sm font-bold text-emerald-600 hover:text-emerald-700">
                  Forgot?
                </button>
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="password" 
                  required
                  value={password}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:outline-none transition-all"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button 
              type="submit"
              className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-100"
            >
              Sign In <ArrowRight size={20} />
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-slate-200"></span>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-slate-400 font-bold">Secure Access</span>
            </div>
          </div>

          <p className="mt-10 text-center text-slate-500 text-sm">
            Don't have an account?{" "}
            <Link to="/signup" className="text-emerald-600 font-bold hover:underline">
              Create one
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side: Branded Visual */}
      <div className="hidden lg:block lg:w-1/2 p-8">
        <div className="h-full w-full bg-slate-900 rounded-[3rem] relative overflow-hidden flex items-center justify-center p-12">
          {/* Decorative Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full"></div>
          
          <div className="relative z-10 text-center">
            <div className="bg-white/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-sm border border-white/10">
              <Zap size={40} className="text-emerald-400 fill-current" />
            </div>
            <h3 className="text-5xl font-black text-white mb-6">Clean energy at your fingertips.</h3>
            <p className="text-slate-400 text-lg max-w-sm mx-auto italic">
              "Renergy has transformed how we monitor our factory's solar output."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;