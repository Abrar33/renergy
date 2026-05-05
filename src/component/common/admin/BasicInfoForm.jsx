import React, { useState } from 'react';
import { Camera, X } from 'lucide-react';

const BasicInfoForm = ({ data, update, setImageFile, onNext }) => {
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // Pass the binary file to the parent Wizard
      setPreview(URL.createObjectURL(file)); // Create a temporary URL for the UI preview
    }
  };

  const removeImage = () => {
    setPreview(null);
    setImageFile(null);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Product Basics</h2>

      {/* Image Upload Area */}
      <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Product Image</label>
        <div className="relative group flex flex-col items-center justify-center border-2 border-dashed border-slate-200 rounded-2xl p-4 bg-slate-50 hover:bg-slate-100 transition-all min-h-[140px]">
          {preview ? (
            <div className="relative w-full h-32">
              <img src={preview} alt="Preview" className="w-full h-full object-contain rounded-lg" />
              <button 
                onClick={removeImage}
                className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-md hover:bg-red-600 transition"
              >
                <X size={14} />
              </button>
            </div>
          ) : (
            <label className="flex flex-col items-center cursor-pointer w-full h-full py-4">
              <Camera size={28} className="text-slate-400 mb-2 group-hover:text-emerald-500 transition-colors" />
              <span className="text-xs font-bold text-slate-500">Click to upload photo</span>
              <input type="file" className="hidden" accept="image/*" onChange={handleImageChange} />
            </label>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <InputField label="Product Name" value={data.name} onChange={(v) => update({...data, name: v})} />
        <InputField label="SKU" value={data.sku} onChange={(v) => update({...data, sku: v})} />
        <InputField label="Brand" value={data.brand} onChange={(v) => update({...data, brand: v})} />
        <InputField label="Price (PKR)" type="number" value={data.price} onChange={(v) => update({...data, price: v})} />
      </div>

      <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Category</label>
        <select 
          className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 outline-none transition-colors" 
          onChange={(e) => update({...data, category: e.target.value})} 
          value={data.category}
        >
          <option value="">Select Category...</option>
          <option value="panel">Solar Panel</option>
          <option value="inverter">Inverter</option>
          <option value="motor">Solar Motor</option>
        </select>
      </div>

      <button 
        onClick={onNext} 
        className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-semibold hover:bg-slate-800 transition shadow-lg shadow-slate-200"
      >
        Next Step
      </button>
    </div>
  );
};

export const InputField = ({ label, value, onChange, type = "text" }) => (
  <div className="space-y-1.5">
    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</label>
    <input 
      type={type} 
      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 outline-none transition-all" 
      value={value} 
      onChange={(e) => onChange(e.target.value)} 
    />
  </div>
);

export default BasicInfoForm;