import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../../../services/productService';
import { ArrowLeft, Edit2, Tag, Zap, Package, DollarSign } from 'lucide-react';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductById(id);
        setProduct(data);
      } catch (err) {
        toast.error("Could not load product details");
        navigate('/admin/products');
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id, navigate]);
const editProduct=(id)=>{
  navigate(`/admin/edit-product/${id}`)
}
  if (loading) return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="animate-pulse font-black text-slate-400">LOADING PRODUCT DATA...</div>
    </div>
  );

  if (!product) return null;

  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Navigation Header */}
      <div className="flex justify-between items-center mb-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-500 hover:text-slate-900 font-bold transition"
        >
          <ArrowLeft size={20} /> Back to Catalog
        </button>
        <button 
          onClick={() => navigate(`/admin/edit-product/${product.id}`)}
          className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-slate-800 transition shadow-lg"
        >
          <Edit2 size={18} /> Edit Product
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side: Product Image */}
        <div className="bg-white rounded-[3rem] border border-slate-100 overflow-hidden shadow-xl shadow-slate-200/50 p-8">
          <div className="aspect-square bg-slate-50 rounded-[2rem] flex items-center justify-center overflow-hidden">
            <img 
              src={product.image_url || 'https://via.placeholder.com/600?text=No+Image'} 
              alt={product.name}
              className="w-full h-full object-contain hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Right Side: Information */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <span className="bg-emerald-50 text-emerald-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border border-emerald-100">
              {product.category}
            </span>
            <h1 className="text-4xl font-black text-slate-950 leading-tight">
              {product.name}
            </h1>
            <div className="flex items-center gap-4 text-slate-500 font-bold">
              <span className="flex items-center gap-1.5"><Tag size={16}/> {product.brand}</span>
              <span>•</span>
              <span className="flex items-center gap-1.5"><Package size={16}/> SKU: {product.id.slice(0, 8)}</span>
            </div>
          </div>
{/* Inventory Section */}
<div className="space-y-4">
  <h3 className="text-lg font-black text-slate-950 flex items-center gap-2">
    <Package size={20} className="text-blue-500"/> Inventory Status
  </h3>
  
  <div className="grid grid-cols-2 gap-4">
    {/* Stock Card */}
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
      <p className="text-[10px] font-black uppercase text-slate-400 mb-1 tracking-widest">Stock Available</p>
      <p className={`text-xl font-black ${product.inventory?.[0]?.quantity_in_stock > 0 ? 'text-emerald-600' : 'text-red-500'}`}>
        {product.inventory?.[0]?.quantity_in_stock ?? 0} Units
      </p>
    </div>

    {/* Location Card */}
    <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
      <p className="text-[10px] font-black uppercase text-slate-400 mb-1 tracking-widest">Warehouse</p>
      <p className="text-xl font-black text-slate-800">
        {product.inventory?.[0]?.warehouse_location || "Not Assigned"}
      </p>
    </div>
  </div>
</div>

          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <p className="text-slate-400 text-xs font-black uppercase mb-2 tracking-tighter flex items-center gap-2">
              <DollarSign size={14}/> Current Price
            </p>
            <h2 className="text-4xl font-black text-slate-950">
              Rs. {Number(product.price).toLocaleString()}
              <span className="text-sm font-bold text-slate-400 ml-2">PKR</span>
            </h2>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-black text-slate-950 flex items-center gap-2">
              <Zap size={20} className="text-emerald-500"/> Specifications
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <p className="text-[10px] font-black uppercase text-slate-400 mb-1">{key}</p>
                  <p className="text-sm font-bold text-slate-800">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Notes / Description Area */}
          <div className="border-t border-slate-100 pt-8 mt-4">
            <h3 className="font-black text-slate-950 mb-3 uppercase text-sm tracking-widest">Description</h3>
            <p className="text-slate-600 leading-relaxed font-medium">
              {product.description || "No additional description provided for this product in the catalog."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;