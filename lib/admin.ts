import { supabase } from './supabase';

export async function signInAdmin(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw error;

  // Verify if user is an admin
  const { data: adminUser, error: adminError } = await supabase
    .from('admin_users')
    .select('*, roles(*)')
    .eq('id', data.user.id)
    .single();

  if (adminError || !adminUser) {
    await supabase.auth.signOut();
    throw new Error('Unauthorized access');
  }

  return { user: data.user, adminUser };
}

export async function getProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function createProduct(product: any) {
  const { data, error } = await supabase
    .from('products')
    .insert([product])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateProduct(id: string, updates: any) {
  const { data, error } = await supabase
    .from('products')
    .update(updates)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function deleteProduct(id: string) {
  const { error } = await supabase
    .from('products')
    .delete()
    .eq('id', id);

  if (error) throw error;
}

export async function getOrders() {
  const { data, error } = await supabase
    .from('orders')
    .select(`
      *,
      order_items (
        *,
        products (*)
      )
    `)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function updateOrderStatus(id: string, status: string) {
  const { data, error } = await supabase
    .from('orders')
    .update({ status })
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function createDiscount(discount: any) {
  const { data, error } = await supabase
    .from('discounts')
    .insert([discount])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getAuditLogs() {
  const { data, error } = await supabase
    .from('audit_logs')
    .select('*, admin_users(full_name)')
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}