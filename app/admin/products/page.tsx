"use client";

import { useState } from "react";
import { Package, Plus, Pencil, Trash2 } from "lucide-react";
import Link from "next/link";

export default function ProductsPage() {
  const [products] = useState([
    {
      id: 1,
      name: "Chudii",
      price: "₹12,999",
      category: "Traditional Wear",
      stock: 15,
      image: "https://naachiyars.in/cdn/shop/files/N1896102-B_800x.jpg?v=1717749034"
    },
    {
      id: 2,
      name: "Anarkalis salwaar",
      price: "₹24,999",
      category: "Party Wear",
      stock: 8,
      image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/AUGUST/17/kqkNJ6Bz_fe99c91b9e964d52bc556b9e26b13674.jpg"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 min-h-screen bg-white shadow-md">
          <div className="p-4">
            <h2 className="text-2xl font-bold text-gray-800">Nithilam Admin</h2>
          </div>
          <nav className="mt-4">
            <Link href="/admin" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-50">
              <Package className="h-5 w-5 mr-3" />
              Dashboard
            </Link>
            <Link href="/admin/products" className="flex items-center px-4 py-3 bg-gray-100 text-gray-700">
              <Package className="h-5 w-5 mr-3" />
              Products
            </Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-semibold text-gray-900">Products</h1>
            <button className="flex items-center px-4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700">
              <Plus className="h-5 w-5 mr-2" />
              Add Product
            </button>
          </div>

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                  <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {products.map((product) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <img src={product.image} alt={product.name} className="h-12 w-12 rounded-md object-cover" />
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{product.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">{product.category}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{product.price}</td>
                    <td className="px-6 py-4 text-sm text-gray-500">{product.stock}</td>
                    <td className="px-6 py-4 text-sm font-medium">
                      <div className="flex space-x-3">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Pencil className="h-5 w-5" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}