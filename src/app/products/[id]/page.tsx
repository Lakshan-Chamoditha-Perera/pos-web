"use client"

import { useParams } from "next/navigation"
import { useAppSelector, useAppDispatch } from "@/app/lib/store/hooks"
import { addToCart } from "@/app/lib/store/slices/productsSlice"

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>()   // get the dynamic id
  const dispatch = useAppDispatch()

  // find product by id in Redux state
  const product = useAppSelector((state) =>
    state.products.items.find((p) => p.id === id)
  )

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-lg text-gray-600">Product not found.</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Left side: Fake image placeholder */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-200 rounded-lg">
            <span className="text-gray-500">Image Placeholder</span>
          </div>

          {/* Right side: Details */}
          <div className="w-full md:w-1/2 flex flex-col justify-between">
            <div>
              <p className="text-gray-600 mb-2">Category: {product.category}</p>
              <p className="text-gray-600 mb-2">Stock: {product.stock}</p>
              <p className="text-2xl font-semibold text-blue-600 mb-6">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <button
              onClick={() => dispatch(addToCart(product))}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
