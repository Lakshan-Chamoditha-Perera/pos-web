'use client'

import { useAppDispatch, useAppSelector } from '../lib/store/hooks'
import { removeFromCart, clearCart } from '../lib/store/slices/productsSlice'

export function ShoppingCart() {
    const cart = useAppSelector((state) => state.products.cart)
    const dispatch = useAppDispatch()

    const total = cart.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className="p-4 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Shopping Cart</h3>

            {cart.length === 0 ? (
                <p className="text-gray-500">Your cart is empty</p>
            ) : (
                <>
                    <ul className="space-y-2 mb-4">
                        {cart.map((item) => (
                            <li key={item.id} className="flex justify-between items-center border-b pb-2">
                                <div>
                                    <span className="font-medium">{item.name}</span>
                                    <span className="ml-2 text-gray-600">${item.price.toFixed(2)}</span>
                                </div>
                                <button
                                    onClick={() => dispatch(removeFromCart(item.id))}
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-between items-center border-t pt-2">
                        <span className="font-bold">Total: ${total.toFixed(2)}</span>
                        <button
                            onClick={() => dispatch(clearCart())}
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                        >
                            Clear Cart
                        </button>
                    </div>
                </>
            )}
        </div>
    )
}