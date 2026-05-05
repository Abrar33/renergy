const CompanyForm = () => (
  <div className="space-y-6 animate-in fade-in duration-500">
    <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 mb-6">
      <h3 className="font-bold text-slate-900">Organization Settings</h3>
      <p className="text-sm text-slate-500">These details appear on sales invoices and warranty claims.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <InputField label="Company Name" placeholder="Sirius Tech Solutions" />
      <InputField label="Tax ID / NTN" placeholder="42301-XXXXXXX-X" />
      <div className="md:col-span-2">
        <InputField label="Warehouse Address" placeholder="Street 5, Industrial Area, Karachi" />
      </div>
    </div>
    
    <button className="bg-slate-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-slate-800 transition-all">
      Update Organization
    </button>
  </div>
);
export default CompanyForm