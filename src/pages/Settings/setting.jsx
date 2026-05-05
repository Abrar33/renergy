import React, { useState } from 'react';
import { User, Building2, Key, Bell, Shield } from 'lucide-react';
import CompanyForm from '../../component/setting/CompanyForm';
import NotificationForm from '../../component/setting/NotificationForm';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const tabs = [
    { id: 'profile', label: 'Profile', icon: <User size={18} /> },
    { id: 'company', label: 'Company', icon: <Building2 size={18} /> },
    { id: 'security', label: 'Security', icon: <Key size={18} /> },
    { id: 'notifications', label: 'Alerts', icon: <Bell size={18} /> },
  ];

  return (
    <div className="w-full max-w-4xl">
      <h1 className="text-3xl font-black text-slate-950 mb-8">System Settings</h1>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 bg-white p-1 rounded-2xl border border-slate-100 shadow-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
              activeTab === tab.id 
                ? 'bg-slate-900 text-white' 
                : 'text-slate-500 hover:bg-slate-50'
            }`}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
        {activeTab === 'profile' && <ProfileForm />}
        {activeTab === 'company' && <CompanyForm />}
        {activeTab === 'security' && <SecurityForm />}
        {activeTab === 'notifications' && <NotificationForm />}
      </div>
    </div>
  );
};

// Form components
const InputField = ({ label, type = "text", placeholder }) => (
  <div className="space-y-1">
    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</label>
    <input type={type} className="w-full p-3 bg-slate-50 rounded-xl border border-slate-100 outline-none focus:border-emerald-500" placeholder={placeholder} />
  </div>
);

const ProfileForm = () => (
  <div className="space-y-6">
    <h2 className="text-lg font-bold">Personal Details</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField label="Full Name" placeholder="Abrar Ahmed" />
      <InputField label="Email Address" placeholder="abrar@renergy.com" />
    </div>
    <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-emerald-700">Update Profile</button>
  </div>
);

const SecurityForm = () => (
  <div className="space-y-6">
    <h2 className="text-lg font-bold">Security Settings</h2>
    <InputField label="Current Password" type="password" />
    <InputField label="New Password" type="password" />
    <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800">Change Password</button>
  </div>
);

// Add CompanyForm and NotificationForm similarly...

export default Settings;