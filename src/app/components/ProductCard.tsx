"use client"
import React from 'react'
import { ShoppingCart } from 'lucide-react'

const ProductCard = () => {
    return (
        <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
            {/* Product Image */}
            <div className="relative overflow-hidden bg-gray-100">
                <img
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
                    alt="Wireless Headphones"
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    -20%
                </div>
            </div>

            {/* Product Details */}
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                    Premium Wireless Headphones
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                    High-quality sound with noise cancellation and 30-hour battery life
                </p>

                {/* Price Section */}
                <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-gray-900">$79.99</span>
                    <span className="text-lg text-gray-400 line-through">$99.99</span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                        <svg
                            key={i}
                            className={`w-5 h-5 ${i < 4 ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    ))}
                    <span className="text-gray-600 text-sm ml-2">(128 reviews)</span>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 hover:gap-3 shadow-md hover:shadow-xl">
                    <ShoppingCart className="w-5 h-5" />
                    Add to Cart
                </button>
            </div>
        </div>
    )
}

export default ProductCard