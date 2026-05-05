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
export const deleteProduct=async(id)=>{
    const {error}=await supabase
    .from("products")
    .delete()
    .eq('id',id);
    if(error) throw error;
    return true
}