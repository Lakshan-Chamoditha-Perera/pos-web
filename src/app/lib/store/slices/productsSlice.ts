import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Product {
    id: string
    name: string
    price: number
    category: string
    stock: number
}

interface ProductsState {
    items: Product[]
    cart: Product[]
}

const initialState: ProductsState = {
    items: [
        { id: '1', name: 'Coffee', price: 3.50, category: 'Beverages', stock: 50 },
        { id: '2', name: 'Sandwich', price: 7.99, category: 'Food', stock: 30 },
        { id: '3', name: 'Cake', price: 4.25, category: 'Desserts', stock: 20 },
    ],
    cart: [],
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            state.cart.push(action.payload)
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.cart = state.cart.filter(item => item.id !== action.payload)
        },
        clearCart: (state) => {
            state.cart = []
        },
    },
})

export const { addToCart, removeFromCart, clearCart } = productsSlice.actions

export default productsSlice.reducer