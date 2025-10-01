"use client";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Modern Point of Sale System
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Streamline your business operations with our powerful, easy-to-use web-based POS solution
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors shadow-lg">
              Get Started
            </button>
            <button
              onClick={() => window.location.href = '/signin'}
              className="bg-white text-indigo-600 border border-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Sign In
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}