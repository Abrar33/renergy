import { Wrench, PhoneCall, ShieldCheck, ChevronRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc }) => (
  <div className="space-y-4">
    <div className="text-emerald-600"><Icon size={40} /></div>
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
    <a href="#" className="flex items-center gap-1 text-sm font-bold text-emerald-600 group">
      Learn More <ChevronRight size={16} className="group-hover:translate-x-1 transition" />
    </a>
  </div>
);

const Services = () => (
  <section className="py-32 max-w-7xl mx-auto px-8 grid md:grid-cols-3 gap-12">
    <ServiceCard 
      icon={Wrench} 
      title="Annual Maintenance" 
      desc="Recommended certified health checks for your inverters and panels." 
    />
    <ServiceCard 
      icon={PhoneCall} 
      title="24/7 Monitoring" 
      desc="Smart sensors alert us the moment your energy output drops." 
    />
    <ServiceCard 
      icon={ShieldCheck} 
      title="Claim Protection" 
      desc="Renergy Shield covers both parts and labor within 48 hours." 
    />
  </section>
);

export default Services;