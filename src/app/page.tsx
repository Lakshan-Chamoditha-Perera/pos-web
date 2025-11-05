"use client";
import Link from "next/link";

export default function Home() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "Not configured";

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">
          Modern Point of Sale System
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Streamline your business operations with our powerful, easy-to-use
          web-based POS solution.
        </p>
        <div className="mb-8 inline-block bg-white px-6 py-3 rounded-lg shadow-md border border-indigo-200">
          <span className="text-sm font-semibold text-gray-700">
            API Base URL:{" "}
          </span>
          <span className="text-sm text-indigo-600 font-mono">{baseUrl}</span>
        </div>
        <div className="flex gap-4 justify-center">
          <Link
            href="/products"
            className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
          >
            View Products
          </Link>
          <Link
            href="/signin"
            className="bg-white text-indigo-600 border border-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition shadow-lg"
          >
            Sign In
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition"
            >
              <div className="w-32 h-32 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="text-lg font-semibold text-gray-800">
                Product {i}
              </h3>
              <p className="text-gray-600 mt-2">$ {(i * 10).toFixed(2)}</p>
              <Link
                href={`/products/${i}`}
                className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              "Beverages",
              "Food",
              "Desserts",
              "Snacks",
              "Electronics",
              "Accessories",
            ].map((cat, i) => (
              <div
                key={i}
                className="bg-indigo-50 rounded-lg flex items-center justify-center h-32 text-indigo-700 font-semibold hover:bg-indigo-100 transition"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
          Current Promotions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-10 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">50% Off Beverages</h3>
            <p className="mb-6">Limited time offer on selected drinks.</p>
            <Link
              href="/products"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Shop Now
            </Link>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-xl shadow-lg p-10 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Buy 1 Get 1 Free</h3>
            <p className="mb-6">Available on all sandwiches and snacks.</p>
            <Link
              href="/products"
              className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Grab Deal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
