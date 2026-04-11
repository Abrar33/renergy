import { InputField } from "./BasicInfoForm";

const CategorySpecsForm = ({ data, update, onBack, onNext }) => {
  const specsConfig = {
    panel: [{ name: 'wattage', label: 'Wattage (Wp)' }, { name: 'efficiency', label: 'Efficiency (%)' }],
    inverter: [{ name: 'power', label: 'Power (kW)' }, { name: 'mppt', label: 'MPPT Count' }],
    motor: [{ name: 'hp', label: 'Horsepower (HP)' }]
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-slate-900">Technical Specs</h2>
      {(specsConfig[data.category] || []).map(field => (
        <InputField key={field.name} label={field.label} onChange={(v) => update({ ...data, specs: { ...data.specs, [field.name]: v }})} />
      ))}
      <div className="flex gap-3">
        <button onClick={onBack} className="flex-1 py-3 border border-slate-200 rounded-xl font-semibold">Back</button>
        <button onClick={onNext} className="flex-1 bg-slate-900 text-white py-3 rounded-xl font-semibold">Next</button>
      </div>
    </div>
  );
};

export default CategorySpecsForm;