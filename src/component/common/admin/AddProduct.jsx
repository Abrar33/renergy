import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { supabase } from "../../../data/supabasClient";
import { Package, DollarSign, BarChart3, Tag } from 'lucide-react';

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    
    // 1. Insert Product
    const { data: newProduct, error: prodError } = await supabase
      .from('products')
      .insert([{ 
        name: data.name, 
        sku: data.sku, 
        price: parseFloat(data.price) 
      }])
      .select()
      .single();

    if (prodError) {
      alert("Error adding product: " + prodError.message);
    } else {
      // 2. Insert Initial Inventory
      const { error: invError } = await supabase
        .from('inventory')
        .insert([{ 
          product_id: newProduct.id, 
          quantity_in_stock: parseInt(data.stock) 
        }]);

      if (invError) alert("Product added, but inventory failed!");
      else {
        alert("Product and Inventory added successfully!");
        reset();
      }
    }
    setLoading(false);
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm max-w-2xl">
      <h2 className="text-2xl font-black mb-6">Add New Solar Product</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Product Name</label>
            <input {...register("name", { required: true })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-emerald-500" placeholder="e.g. 500W Solar Panel" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">SKU Code</label>
            <input {...register("sku", { required: true })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-emerald-500" placeholder="e.g. SOL-500" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Price ($)</label>
            <input type="number" {...register("price", { required: true })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-emerald-500" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700">Initial Stock</label>
            <input type="number" {...register("stock", { required: true })} className="w-full p-4 bg-slate-50 border rounded-2xl outline-none focus:border-emerald-500" />
          </div>
        </div>

        <button 
          disabled={loading}
          className="w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-emerald-600 transition"
        >
          {loading ? "Processing..." : "Add to Inventory"}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;