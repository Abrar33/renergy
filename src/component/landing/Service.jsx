import React from 'react';
import { Wrench, PhoneCall, ShieldCheck, ChevronRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc }) => (
  <div className="group p-6 md:p-8 bg-white border border-slate-100 rounded-[2rem] hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300 flex flex-col items-start h-full">
    {/* Icon Container */}
    <div className="bg-emerald-50 p-4 rounded-2xl text-emerald-600 mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
      <Icon size={32} />
    </div>

    {/* Content */}
    <h3 className="text-xl md:text-2xl font-black text-slate-900 mb-4 tracking-tight">
      {title}
    </h3>
    <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8 flex-grow">
      {desc}
    </p>

    {/* Link */}
    <a 
      href="#" 
      className="inline-flex items-center gap-2 text-sm font-black text-emerald-600 uppercase tracking-widest group/link"
    >
      Learn More 
      <ChevronRight 
        size={18} 
        className="group-hover/link:translate-x-1 transition-transform" 
      />
    </a>
  </div>
);

const Services = () => (
  <section className="py-20 md:py-32 bg-slate-50 overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 lg:px-12">
      
      {/* Section Header for better UX */}
      <div className="max-w-2xl mb-16 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
          Beyond Installation.
        </h2>
        <p className="text-slate-500 text-lg md:text-xl font-medium">
          We provide the ecosystem needed to keep your energy clean and consistent for decades.
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        <ServiceCard 
          icon={Wrench} 
          title="Annual Maintenance" 
          desc="Our certified technicians perform rigorous 24-point health checks on your inverters and solar arrays to ensure peak efficiency." 
        />
        <ServiceCard 
          icon={PhoneCall} 
          title="24/7 Monitoring" 
          desc="Smart IoT sensors integrated into your system alert our central command center the moment your energy output deviates from the norm." 
        />
        <ServiceCard 
          icon={ShieldCheck} 
          title="Claim Protection" 
          desc="Renergy Shield isn't just a warranty; it's a promise. We cover both parts and technical labor, with a guaranteed 48-hour response time." 
        />
      </div>
    </div>
  </section>
);

export default Services;