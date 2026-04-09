import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Zap, User, Mail, Lock, ShieldCheck, ArrowRight } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();
  
  // Expanded your state logic to include fullName for the UI
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const handleSignup = (e) => {
    e.preventDefault();
    // Your logic for handling signup goes here (e.g., API call)
    console.log("Form Data:", data);
    
    // Example: redirect after success
    // navigate('/login');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 font-sans">
      <div className="max-w-xl w-full bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 lg:p-16 border border-slate-100">
        
        {/* Header */}
        <div className="text-center mb-10">
          <div 
            onClick={() => navigate("/")}
            className="inline-flex bg-emerald-600 p-3 rounded-2xl text-white mb-6 cursor-pointer hover:scale-105 transition-transform"
          >
            <Zap size={28} fill="currentColor" />
          </div>
          <h2 className="text-3xl font-black text-slate-900">Join Renergy</h2>
          <p className="text-slate-500 mt-2">Start your journey toward energy independence.</p>
        </div>

        {/* Signup Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSignup}>
          
          {/* Full Name Input */}
          <div className="space-y-2 col-span-2 md:col-span-1">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                required
                placeholder="Abrar Ahmed" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-emerald-500 focus:bg-white focus:outline-none transition" 
                onChange={(e) => setData({ ...data, fullName: e.target.value })}
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-2 col-span-2 md:col-span-1">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="email" 
                required
                placeholder="abrar@example.com" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-emerald-500 focus:bg-white focus:outline-none transition" 
                onChange={(e) => setData({ ...data, email: e.target.value })}
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2 col-span-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">
              Create Password
            </label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="password" 
                required
                placeholder="Min. 8 characters" 
                className="w-full pl-12 pr-4 py-4 bg-slate-50 border-2 border-transparent rounded-2xl focus:border-emerald-500 focus:bg-white focus:outline-none transition" 
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
          </div>

          {/* Notice Box */}
          <div className="col-span-2 flex items-start gap-3 p-4 bg-emerald-50 rounded-2xl border border-emerald-100">
            <ShieldCheck className="text-emerald-600 mt-0.5 flex-shrink-0" size={20} />
            <p className="text-xs text-emerald-800 leading-relaxed">
              By creating an account, you agree to our 25-year performance warranty terms and the Renergy data privacy policy.
            </p>
          </div>

          {/* Submit Button */}
          <button 
            type="submit"
            className="col-span-2 bg-emerald-600 text-white py-5 rounded-2xl font-black text-lg hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 flex items-center justify-center gap-2"
          >
            Create My Account <ArrowRight size={20} />
          </button>
        </form>

        {/* Footer Link */}
        <p className="mt-8 text-center text-sm text-slate-400 font-medium">
          Already a member?{" "}
          <Link 
            to="/login" 
            className="text-slate-900 font-bold hover:text-emerald-600 underline underline-offset-4 transition-colors"
          >
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;