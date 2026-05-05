import React, { useEffect, useState } from 'react';
import { Search, Plus, MoreVertical, Edit2, Trash2, ExternalLink, Copy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getProducts, deleteProduct } from '../../../services/productService';
import toast from 'react-hot-toast';

const Products = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeMenu, setActiveMenu] = useState(null);

  const loadData = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {
      toast.error("Failed to fetch catalog data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const executeDelete = async (id) => {
    const deletePromise = deleteProduct(id);
    toast.promise(deletePromise, {
      loading: 'Deleting...',
      success: () => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
        setActiveMenu(null);
        return <b>Successfully deleted!</b>;
      },
      error: <b>Permission denied or database error.</b>,
    });
  };

  const handleDeleteConfirm = (id, name) => {
    toast((t) => (
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <p className="text-sm font-bold text-slate-800">Delete <b>{name}</b>?</p>
        </div>
        <div className="flex gap-2">
          <button 
            onClick={() => toast.dismiss(t.id)}
            className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-600"
          >
            Cancel
          </button>
          <button 
            onClick={() => { toast.dismiss(t.id); executeDelete(id); }}
            className="bg-red-50 text-red-600 px-3 py-1 rounded-lg text-[10px] font-black uppercase hover:bg-red-100"
          >
            Confirm
          </button>
        </div>
      </div>
    ), { 
      duration: 5000,
      style: { borderRadius: '1rem', border: '1px solid #fee2e2', minWidth: '300px' } 
    });
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (loading) return (
    <div className="w-full h-96 flex items-center justify-center">
      <div className="text-slate-400 font-black animate-pulse">LOADING RENERGY CATALOG...</div>
    </div>
  );

  return (
    <div className="w-full pb-20">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
        <div>
          <h1 className="text-3xl font-black text-slate-950 uppercase">Products Catalog</h1>
          <p className="text-slate-500 font-medium">Manage master product data and pricing.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl outline-none w-full md:w-64 focus:border-emerald-500 transition-colors" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button onClick={() => navigate('/admin/add-product')} className="bg-emerald-600 text-white p-3 rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-200">
            <Plus size={20} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((p) => (
          <div key={p.id} className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500">
            <div className="aspect-square bg-slate-50 relative overflow-hidden">
               <img 
                 src={p.image_url || 'https://via.placeholder.com/400?text=No+Image'} 
                 alt={p.name} 
                 className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700" 
               />
               
               <div className="absolute top-4 right-4">
                  <button 
                    onClick={() => setActiveMenu(activeMenu === p.id ? null : p.id)}
                    className={`p-2 rounded-xl transition-all ${activeMenu === p.id ? 'bg-slate-900 text-white' : 'bg-white/90 backdrop-blur text-slate-600 shadow-sm opacity-0 group-hover:opacity-100'}`}
                  >
                    <MoreVertical size={16}/>
                  </button>

                  {activeMenu === p.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-2xl shadow-2xl border border-slate-100 py-2 z-50">
                      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 transition">
                        <ExternalLink size={14}/> View Details
                      </button>
                      <button className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-slate-700 hover:bg-slate-50 transition">
                        <Copy size={14}/> Duplicate
                      </button>
                      <div className="h-px bg-slate-100 my-1 mx-2" />
                      <button 
                        onClick={() => handleDeleteConfirm(p.id, p.name)}
                        className="w-full flex items-center gap-3 px-4 py-2.5 text-sm font-bold text-red-600 hover:bg-red-50 transition"
                      >
                        <Trash2 size={14}/> Delete Product
                      </button>
                    </div>
                  )}
               </div>
            </div>

            <div className="p-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-lg">
                {p.category}
              </span>
              <h3 className="text-lg font-black text-slate-950 mt-3 truncate">{p.name}</h3>
              <p className="text-xs text-slate-400 font-bold mb-4 uppercase">
                {p.brand || 'No Brand'} • {p.specifications?.wattage || p.specifications?.hp || 'Standard'}
              </p>
              
              <div className="flex justify-between items-center pt-4 border-t border-slate-50">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase">Price</span>
                  <span className="text-xl font-black text-slate-900">
                    Rs. {Number(p.price).toLocaleString()}
                  </span>
                </div>
                <button 
                  onClick={() => navigate(`/admin/edit-product/${p.id}`)}
                  className="bg-slate-50 p-2.5 rounded-xl text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-all"
                >
                  <Edit2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;