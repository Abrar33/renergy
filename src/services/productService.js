import { supabase } from './supabasClient';

export const getProducts = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
  return data;
};
export const getProductById = async (id) => {
  const { data, error } = await supabase
    .from('products')
    .select(`
      *,
      inventory (
        quantity_in_stock,
        warehouse_location
      )
    `)
    .eq('id', id)
    .single();

  if (error) throw error;
  return data;
};
export const deleteProduct=async(id)=>{
    const {error}=await supabase
    .from("products")
    .delete()
    .eq('id',id);
    if(error) throw error;
    return true
}
export const updateProduct = async (id, productData, inventoryData) => {
  // 1. Update Products Table
  const { error: prodError } = await supabase
    .from('products')
    .update(productData)
    .eq('id', id);

  if (prodError) throw prodError;

  // 2. Update Inventory Table
  const { error: invError } = await supabase
    .from('inventory')
    .update(inventoryData)
    .eq('product_id', id);

  if (invError) throw invError;
  
  return true;
};
