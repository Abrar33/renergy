import { InputField } from "./BasicInfoForm";

const InventoryDetailsForm = ({ data, update, onBack, onSave }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Inventory & Location</h2>
      
      <InputField 
        label="Stock Quantity" 
        type="number"
        // Use 'stock' because that is the key in your formData state
        value={data.stock} 
        onChange={(v) => update({ ...data, stock: v })} 
      />

      <InputField 
        label="Warehouse Location" 
        // Use 'location' because that is the key in your formData state
        value={data.location} 
        onChange={(v) => update({ ...data, location: v })} 
      />

      <div className="flex gap-3">
        <button onClick={onBack} className="flex-1 py-3 border border-slate-200 rounded-xl font-semibold">Back</button>
        <button onClick={onSave} className="flex-1 bg-emerald-600 text-white py-3 rounded-xl font-semibold">
          Save Product
        </button>
      </div>
    </div>
  );
};

export default InventoryDetailsForm;