import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '../../../services/supabasClient';
import BasicInfoForm from './BasicInfoForm';
import CategorySpecsForm from './CategoryDetailsForm';
import InventoryDetailsForm from './inventoryDetailForm';
import WizardHeader from './WizardHeader';
import toast from 'react-hot-toast';

const EditProductWizard = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(true);
  const [imageFile, setImageFile] = useState(null);
 // Debug log for formData state
  // State remains the same for component compatibility
  const [formData, setFormData] = useState({
    name: '', 
    sku: '', 
    category: '', 
    brand: '', 
    price: 0, 
    specs: {}, 
    stock: 0, 
    location: '' 
  });

  useEffect(() => {
    const fetchExistingData = async () => {
      try {
        // Fetch Product joined with Inventory data
      const { data: product, error: pErr } = await supabase
  .from('products')
  .select(`*, inventory(quantity_in_stock, warehouse_location)`)
  .eq('id', id)
  .single();

if (product) {
  setFormData({
    name: product.name,
    sku: product.sku,
    category: product.category,
    brand: product.brand,
    price: product.price,
    // Database is 'specifications', state is 'specs'
    specs: product.specifications || {}, 
    // Access the first item in the inventory array
    stock: product.inventory?.[0]?.quantity_in_stock || 0,
    location: product.inventory?.[0]?.warehouse_location || '',
    image_url: product.image_url
  });
}
      } catch (err) {
        console.error("Fetch error:", err);
        toast.error("Failed to load product data");
        navigate('/admin/products');
      } finally {
        setLoading(false);
      }
    };
    fetchExistingData();
  }, [id, navigate]);
  const handleUpdate = async () => {
    try {
      let imageUrl = formData.image_url;

      // Handle Image Upload if a new file was selected
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Math.random()}.${fileExt}`;
        const filePath = `products/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('product-images')
          .upload(filePath, imageFile);

        if (uploadError) throw uploadError;

        const { data } = supabase.storage
          .from('product-images')
          .getPublicUrl(filePath);
        
        imageUrl = data.publicUrl;
      }

      // 1. Update Products Table (Aligned with image_e819d7.png)
      const { error: pErr } = await supabase
        .from('products')
        .update({
          name: formData.name,
          sku: formData.sku,
          category: formData.category,
          brand: formData.brand,
          price: Number(formData.price), // Cast to numeric
          specifications: formData.specs, // Mapping state back to db column
          image_url: imageUrl
        })
        .eq('id', id);

      if (pErr) throw pErr;

      // 2. Update Inventory Table (Aligned with image_e81920.png)
      const { error: iErr } = await supabase
        .from('inventory')
        .update({ 
          quantity_in_stock: Number(formData.stock), // Cast to int4
          warehouse_location: formData.location
        })
        .eq('product_id', id);

      if (iErr) throw iErr;

      toast.success("Product and Inventory updated successfully!");
      navigate('/admin/inventory'); // Or your preferred list view
    } catch (err) {
      console.error("Full Update Error:", err);
      toast.error(`Update failed: ${err.message}`);
    }
  };

  if (loading) return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50">
      <div className="text-xl font-semibold text-slate-600 animate-pulse">Loading Product Data...</div>
    </div>
  );

  return (
    <div className="p-8 bg-slate-50 min-h-screen">
      <div className="max-w-2xl mx-auto">
        <WizardHeader title={`Editing: ${formData.name}`} onBack={() => navigate(-1)} />
        
        <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl">
          {/* Progress Indicator */}
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map((s) => (
              <div key={s} className={`h-1.5 flex-1 rounded-full ${step >= s ? 'bg-emerald-500' : 'bg-slate-100'}`} />
            ))}
          </div>

          {step === 1 && (
            <BasicInfoForm 
              data={formData} 
              update={setFormData} 
              setImageFile={setImageFile} 
              onNext={() => setStep(2)} 
            />
          )}
          {step === 2 && (
            <CategorySpecsForm 
              data={formData} 
              update={setFormData} 
              onBack={() => setStep(1)} 
              onNext={() => setStep(3)} 
            />
          )}
          {step === 3 && (
            <InventoryDetailsForm 
              data={formData} 
              update={setFormData} 
              onBack={() => setStep(2)} 
              onSave={handleUpdate} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EditProductWizard;