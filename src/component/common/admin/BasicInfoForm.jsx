const BasicInfoForm = ({ data, update, onNext }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900">Product Basics</h2>
    <div className="grid grid-cols-2 gap-4">
      <InputField label="Product Name" value={data.name} onChange={(v) => update({...data, name: v})} />
      <InputField label="SKU" value={data.sku} onChange={(v) => update({...data, sku: v})} />
      <InputField label="Brand" value={data.brand} onChange={(v) => update({...data, brand: v})} />
      <InputField label="Price (PKR)" type="number" value={data.price} onChange={(v) => update({...data, price: v})} />
    </div>
    <div className="space-y-1">
      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Category</label>
      <select className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl" onChange={(e) => update({...data, category: e.target.value})} value={data.category}>
        <option value="">Select Category...</option>
        <option value="panel">Solar Panel</option>
        <option value="inverter">Inverter</option>
        <option value="motor">Solar Motor</option>
      </select>
    </div>
    <button onClick={onNext} className="w-full bg-slate-900 text-white py-3.5 rounded-xl font-semibold hover:bg-slate-800">Next Step</button>
  </div>
);

export const InputField = ({ label, value, onChange, type = "text" }) => (
  <div className="space-y-1.5">
    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</label>
    <input type={type} className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:border-emerald-500 outline-none" value={value} onChange={(e) => onChange(e.target.value)} />
  </div>
);
export default BasicInfoForm;