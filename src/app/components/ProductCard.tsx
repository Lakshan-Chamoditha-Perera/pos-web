"use client"

import { useAppDispatch, useAppSelector } from '../lib/store/hooks'
import { addToCart } from '../lib/store/slices/productsSlice'
import type { Product } from '../lib/store/slices/productsSlice'

export function ProductCard({ product }: { product: Product }) {
    const dispatch = useAppDispatch()
    const isInCart = useAppSelector((state) =>
        state.products.cart.some(item => item.id === product.id)
    )

    return (
        <div className="border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-lg">{product.name}</h3>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-sm text-gray-500">Stock: {product.stock}</p>
            <button
                onClick={() => dispatch(addToCart(product))}
                disabled={isInCart}
                className={`mt-2 w-full py-2 rounded ${isInCart
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-blue-500 hover:bg-blue-600 text-white'
                    }`}
            >
                {isInCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
        </div>
    )
}
