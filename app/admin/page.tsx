"use client";

import { useState, useEffect } from "react";
import { BarChart3, Package, Users, IndianRupee, ShoppingBag, TrendingUp, AlertCircle } from "lucide-react";
import Link from "next/link";
import { getProducts, getOrders } from "@/lib/admin";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalSales: "₹1,23,456",
    totalOrders: "234",
    totalProducts: "89",
    totalCustomers: "567",
  });

  const [recentOrders, setRecentOrders] = useState([]);
  const [lowStockProducts, setLowStockProducts] = useState([]);
  const [salesData, setSalesData] = useState([
    { name: 'Jan', sales: 4000 },
    { name: 'Feb', sales: 3000 },
    { name: 'Mar', sales: 5000 },
    { name: 'Apr', sales: 4500 },
    { name: 'May', sales: 6000 },
    { name: 'Jun', sales: 5500 },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const orders = await getOrders();
        const products = await getProducts();
        
        setRecentOrders(orders.slice(0, 5));
        setLowStockProducts(products.filter(p => p.stock < 10).slice(0, 5));
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white shadow-md">
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">Nithilam Admin</h2>
          </div>
          <nav className="mt-4">
            <Link href="/admin" className="flex items-center px-4 py-3 bg-gray-100 text-gray-700">
              <BarChart3 className="h-5 w-5 mr-3" />
              Dashboard
            </Link>
            <Link href="/admin/products" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
              <Package className="h-5 w-5 mr-3" />
              Products
            </Link>
            <Link href="/admin/orders" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
              <ShoppingBag className="h-5 w-5 mr-3" />
              Orders
            </Link>
            <Link href="/admin/customers" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
              <Users className="h-5 w-5 mr-3" />
              Customers
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-white text-gray-600 rounded-md shadow hover:bg-gray-50">
                Last 7 Days
              </button>
              <button className="px-4 py-2 bg-white text-gray-600 rounded-md shadow hover:bg-gray-50">
                Last 30 Days
              </button>
            </div>
          </div>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-pink-100 text-pink-600">
                  <IndianRupee className="h-8 w-8" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 uppercase">Total Sales</p>
                  <p className="text-2xl font-semibold text-gray-900">{stats.totalSales}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-blue-100 text-blue-600">
                  <ShoppingBag className="h-8 w-8" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 uppercase">Total Orders</p>
                  <p className="text-2xl font-semibold text-gray-900">{stats.totalOrders}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-green-100 text-green-600">
                  <Package className="h-8 w-8" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 uppercase">Total Products</p>
                  <p className="text-2xl font-semibold text-gray-900">{stats.totalProducts}</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="p-3 rounded-full bg-purple-100 text-purple-600">
                  <Users className="h-8 w-8" />
                </div>
                <div className="ml-4">
                  <p className="text-sm text-gray-500 uppercase">Total Customers</p>
                  <p className="text-2xl font-semibold text-gray-900">{stats.totalCustomers}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Charts and Tables Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Sales Chart */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Sales Overview</h2>
                <TrendingUp className="h-5 w-5 text-gray-400" />
              </div>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={salesData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="sales" stroke="#EC4899" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Low Stock Alert */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Low Stock Alert</h2>
                <AlertCircle className="h-5 w-5 text-red-500" />
              </div>
              <div className="space-y-4">
                {lowStockProducts.map((product: any) => (
                  <div key={product.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gray-200 rounded-md overflow-hidden">
                        <img 
                          src={product.images?.[0] || 'https://via.placeholder.com/100'} 
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                        <p className="text-sm text-gray-500">Category: {product.category}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-red-600">{product.stock} in stock</p>
                      <p className="text-sm text-gray-500">₹{product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left border-b">
                      <th className="pb-4 font-semibold text-sm text-gray-600">Order ID</th>
                      <th className="pb-4 font-semibold text-sm text-gray-600">Customer</th>
                      <th className="pb-4 font-semibold text-sm text-gray-600">Product</th>
                      <th className="pb-4 font-semibold text-sm text-gray-600">Amount</th>
                      <th className="pb-4 font-semibold text-sm text-gray-600">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((order: any) => (
                      <tr key={order.id} className="border-b">
                        <td className="py-4">#{order.id.slice(0, 8)}</td>
                        <td className="py-4">{order.shipping_address.name}</td>
                        <td className="py-4">{order.order_items?.[0]?.products?.name || 'N/A'}</td>
                        <td className="py-4">₹{order.total_amount}</td>
                        <td className="py-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                            order.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}