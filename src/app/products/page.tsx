'use client'

import { useAppSelector } from '../lib/store/hooks'
import { ProductCard } from '../components/ProductCard'
import { ShoppingCart } from '../components/ShoppingCart'

export default function ProductsPage() {
    const products = useAppSelector((state) => state.products.items)

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Point of Sale System</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Products Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Products</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>

                    {/* Shopping Cart Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Cart</h2>
                        <ShoppingCart />
                    </div>
                </div>
            </div>
        </div>
    )
}