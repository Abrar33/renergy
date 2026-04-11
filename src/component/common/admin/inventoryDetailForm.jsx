import { InputField } from "./BasicInfoForm";

const InventoryDetailsForm = ({ data, update, onBack, onSave }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-bold text-slate-900">Inventory</h2>
    <InputField label="Initial Stock" type="number" onChange={(v) => update({...data, stock: parseInt(v)})} />
    <InputField label="Warehouse Location" onChange={(v) => update({...data, location: v})} />
    <div className="flex gap-3">
      <button onClick={onBack} className="flex-1 py-3 border border-slate-200 rounded-xl font-semibold">Back</button>
      <button onClick={onSave} className="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-semibold">Save Product</button>
    </div>
  </div>
);
export default InventoryDetailsForm;