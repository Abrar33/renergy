import React from 'react';
import { Camera } from 'lucide-react';

const ProfileForm = () => (
  <div className="space-y-8 animate-in fade-in duration-500">
    <div className="flex items-center gap-6">
      <div className="relative group">
        <div className="w-24 h-24 rounded-3xl bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-200 group-hover:border-emerald-500 transition-colors">
          <Camera className="text-slate-400 group-hover:text-emerald-500" />
        </div>
        <button className="absolute -bottom-2 -right-2 bg-white shadow-md p-2 rounded-lg border border-slate-100 text-xs font-bold">Edit</button>
      </div>
      <div>
        <h3 className="font-bold text-slate-900 text-lg">Your Photo</h3>
        <p className="text-slate-500 text-sm">This will be displayed on your profile and sidebar.</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField label="Full Name" placeholder="Abrar Ahmed" />
      <InputField label="Public Username" placeholder="@abrar_renergy" />
      <div className="md:col-span-2">
        <InputField label="Email Address" placeholder="abrar@sirius-tech.com" disabled />
        <p className="text-[10px] text-slate-400 mt-2 italic">* Email changes require manual verification via Supabase Auth.</p>
      </div>
    </div>

    <button className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-600/20 transition-all active:scale-95">
      Save Profile
    </button>
  </div>
);
export default ProfileForm;