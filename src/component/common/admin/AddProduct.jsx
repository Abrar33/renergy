import React, { useState } from 'react';
import { supabase } from '../../../data/supabasClient'; // Ensure this path is correct
import BasicInfoForm from './BasicInfoForm';
import CategorySpecsForm from './CategoryDetailsForm';
import InventoryDetailsForm from './inventoryDetailForm';
import WizardHeader from './WizardHeader';

const AddProductWizard = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({ 
    name: '', sku: '', category: '', brand: '', price: 0, specs: {}, stock: 0, location: '' 
  });

  const saveToSupabase = async () => {
    // 1. Insert into Products Table
    const { data: newProduct, error: prodError } = await supabase
      .from('products')
      .insert([{ 
        name: formData.name, 
        sku: formData.sku, 
        category: formData.category, 
        brand: formData.brand,
        price: formData.price, 
        specifications: formData.specs 
      }])
      .select().single();

    if (prodError) return alert("Product save failed: " + prodError.message);

    // 2. Insert into Inventory Table
    const { error: invError } = await supabase
      .from('inventory')
      .insert([{ 
        product_id: newProduct.id, 
        quantity_in_stock: formData.stock,
        warehouse_location: formData.location
      }]);

    if (invError) alert("Product saved, but inventory initialization failed.");
    else alert("Product added successfully!");
  };

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <WizardHeader title="Add New Product" onBack={() => window.location.href = '/dashboard'} />
        
        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl">
          {/* Progress Bar */}
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`h-1.5 flex-1 rounded-full ${step >= s ? 'bg-emerald-500' : 'bg-slate-100'}`} />
            ))}
          </div>

          {step === 1 && <BasicInfoForm data={formData} update={setFormData} onNext={() => setStep(2)} />}
          {step === 2 && <CategorySpecsForm data={formData} update={setFormData} onBack={() => setStep(1)} onNext={() => setStep(3)} />}
          {step === 3 && <InventoryDetailsForm data={formData} update={setFormData} onBack={() => setStep(2)} onSave={saveToSupabase} />}
        </div>
      </div>
    </div>
  );
};
export default AddProductWizard;