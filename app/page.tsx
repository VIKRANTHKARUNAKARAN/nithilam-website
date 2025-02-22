"use client";

import { ShoppingBag, Heart, Search, Menu, ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useRef } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const categories = [
    { name: "T-shirts", href: "#" },
    { name: "ANARKALI SET", href: "#" },
    { name: "CO-ORD SETS", href: "#" },
    { name: "DUPATTA SET", href: "#" },
    { name: "GOWN", href: "#" },
    { name: "KAFTAN", href: "#" },
    { name: "KURTA PANT", href: "#" },
    { name: "KURTI", href: "#" },
    { name: "PALAZZO SET", href: "#" },
    { name: "PARTY WEAR", href: "#" },
    { name: "TUNIC", href: "#" },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Chudii",
      price: "₹12,999",
      image: "https://naachiyars.in/cdn/shop/files/N1896102-B_800x.jpg?v=1717749034",
    },
    {
      id: 2,
      name: "Anarkalis salwaar",
      price: "₹24,999",
      image: "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/2024/AUGUST/17/kqkNJ6Bz_fe99c91b9e964d52bc556b9e26b13674.jpg",
    },
    {
      id: 3,
      name: "Fairy gown",
      price: "₹8,999",
      image: "https://www.elahe.in/cdn/shop/files/33_04fb3469-5457-49f4-8c42-85c5328c2077_5000x.jpg?v=1712151019",
    },
    {
      id: 4,
      name: "CO-ORD Set",
      price: "₹4,999",
      image: "https://athenalifestyle.com/cdn/shop/products/15-09-202200425_1.jpg?v=1737541553",
    },
    {
      id: 5,
      name: "Kaftan Set",
      price: "₹2,999",
      image: "https://www.torani.in/cdn/shop/files/06-06-23TORANI6298_700x.png?v=1715766868",
    },
    {
      id: 6,
      name: "Kurta Pant",
      price: "₹18,999",
      image: "https://azrakh.com/cdn/shop/products/il_fullxfull.5244951469_1tug.jpg?v=1694525987&width=1946",
    },
     {
      id: 7,
      name: "PALLZO SET",
      price: "₹2,999",
      image: "https://www.jiomart.com/images/product/original/rvvc4m5ngg/sancia-women-georgette-ethnic-top-palazzo-ethnic-jacket-set-for-women-girls-ethnic-wear-for-women-indian-dress-for-women-kurta-set-with-dupatta-floral-embroidered-kurta-maroon-s-product-images-rvvc4m5ngg-5-202311071450.jpg?im=Resize=(500,630)",
    },
     {
      id: 8,
      name: "Flawless Party Wear",
      price: "₹34,000",
      image: "https://beingflawless.com/cdn/shop/files/DSC_5004.jpg?v=1693666305",
    },
     {
      id: 9,
      name: "Tunic wear",
      price: "₹5000",
      image: "https://wholetex.sgp1.cdn.digitaloceanspaces.com/full/white-mal-cotton-fancy-tunic-top-4251.jpg",
    },
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = 300;
      if (direction === 'left') {
        sliderRef.current.scrollLeft -= scrollAmount;
      } else {
        sliderRef.current.scrollLeft += scrollAmount;
      }
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <button
                onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>

            <div className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">NITHILAM</h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search for sarees, salwar..."
                  className="w-[300px] pl-10 pr-4 py-2 border border-gray-300 rounded-full bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all duration-300 group-hover:bg-white"
                />
              </div>
              <button className="text-gray-700 hover:text-gray-900">
                <Heart className="h-6 w-6" />
              </button>
              <button className="text-gray-700 hover:text-gray-900">
                <ShoppingBag className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Categories Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isCategoryOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out z-50`}
      >
        <div className="h-full flex flex-col">
          <div className="px-4 py-6 border-b">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Categories</h2>
              <button
                onClick={() => setIsCategoryOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            <nav className="px-2 py-4">
              {categories.map((category, index) => (
                <a
                  key={index}
                  href={category.href}
                  className="block px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md transition-colors duration-200"
                >
                  {category.name}
                </a>
              ))}
            </nav>
          </div>
          <div className="px-4 py-6 border-t">
            <a href="#" className="block px-4 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md">
              Login / Register
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative pt-16">
         <div className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/fashionable-clothes-boutique-store-london-600nw-589577570.jpg')" }}
           >
           <div className="absolute inset-0 bg-gray-900 bg-opacity-20"></div>
         </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Nithilam Festive Collection 2025</h1>
          <p className="mt-6 text-xl text-white max-w-3xl">Discover our latest collection of traditional South Indian wear for the modern woman.</p>
          <div className="mt-10">
            <a href="#" className="inline-block bg-white px-8 py-3 text-base font-medium text-gray-900 hover:bg-gray-100">
              Shop Now
            </a>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Featured Collection</h2>
        <div className="relative">
          <button 
            onClick={() => scroll('left')} 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={() => scroll('right')} 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-all"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          <div 
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 scroll-smooth hide-scrollbar"
            style={{ scrollBehavior: 'smooth' }}
          >
            {featuredProducts.map((product) => (
              <div key={product.id} className="flex-none w-[280px] group">
                <div className="aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <Heart className="h-5 w-5 text-gray-600" />
                  </button>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm text-gray-700">{product.name}</h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="#" className="relative group">
              <div className="aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg overflow-hidden">
                <img
src="https://spicetreemunnar.com/wp-content/uploads/2023/11/Onam-famous-festival-of-South-India.jpg"
                  alt="Silk Sarees"
                  className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Festive wear</h3>
                </div>
              </div>
            </a>
            <a href="#" className="relative group">
              <div className="aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://medias.utsavfashion.com/blog/wp-content/uploads/2016/09/churidaar-suit-banner.jpg"
                  alt="Salwar Sets"
                  className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">casual wear</h3>
                </div>
              </div>
            </a>
            <a href="#" className="relative group">
              <div className="aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg overflow-hidden">
                <img
                  src="https://static.wixstatic.com/media/cd1931_537a4444a86b4000a7628448b4da4568~mv2.png/v1/fill/w_670,h_670,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/cd1931_537a4444a86b4000a7628448b4da4568~mv2.png"
                  alt="Traditional Wear"
                  className="object-cover object-center w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-20 group-hover:bg-opacity-30 transition-opacity"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-bold text-white">Traditional Wear</h3>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Shop</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">New Arrivals</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Bestsellers</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Sale</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Collections</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Help</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">FAQ</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Shipping</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Returns</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Size Guide</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">About</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Our Story</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Careers</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Press</a></li>
                <li><a href="#" className="text-base text-gray-500 hover:text-gray-900">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Subscribe</h3>
              <p className="mt-4 text-base text-gray-500">Get 10% off your first order by joining our newsletter.</p>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="block w-full px-4 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <button
                  type="submit"
                  className="mt-4 w-full bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-200 pt-8">
            <p className="text-base text-gray-400 text-center">&copy; 2024 Nithilam. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}