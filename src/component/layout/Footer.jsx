import React from 'react';
import { Zap, Mail, Phone} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 mt-24 rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Top Section: Brand & Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 group cursor-pointer w-fit">
              <div className="bg-emerald-600 p-2 rounded-lg text-white">
                <Zap size={20} fill="currentColor" />
              </div>
              <span className="text-2xl font-black tracking-tighter">RENERGY</span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Powering the transition to sustainable energy with next-gen solar technology and 24/7 smart monitoring.
            </p>
            <div className="flex gap-4">
              {/* <SocialIcon icon={<Facebook size={18} />} />
              <SocialIcon icon={<Instagram size={18} />} />
              <SocialIcon icon={<Twitter size={18} />} />
              <SocialIcon icon={<Linkedin size={18} />} /> */}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-6 text-emerald-500">Navigation</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-sm">
              <li><a href="#services" className="hover:text-white transition">Services</a></li>
              <li><a href="#warranty" className="hover:text-white transition">Warranty Check</a></li>
              <li><a href="/dashboard" className="hover:text-white transition">Seller Portal</a></li>
              <li><a href="#" className="hover:text-white transition">Project Gallery</a></li>
            </ul>
          </div>

          {/* Column 3: Legal */}
          <div>
            <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-6 text-emerald-500">Policy</h4>
            <ul className="space-y-4 text-slate-400 font-bold text-sm">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Warranty Terms</a></li>
              <li><a href="#" className="hover:text-white transition">Cookie Settings</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h4 className="font-black text-sm uppercase tracking-[0.2em] mb-2 text-emerald-500">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-400 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition">
                  <Mail size={16} />
                </div>
                <span className="text-sm font-bold">support@renergy.com</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 group">
                <div className="bg-white/5 p-2 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition">
                  <Phone size={16} />
                </div>
                <span className="text-sm font-bold">+92 300 0000000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-medium tracking-wide text-center md:text-left">
            © 2026 RENERGY Solar Solutions. All rights reserved. 
            Designed for a sustainable future.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">System Status: Optimal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Social Component
const SocialIcon = ({ icon }) => (
  <a href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-emerald-600 hover:text-white transition-all duration-300">
    {icon}
  </a>
);

export default Footer;