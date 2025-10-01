"use client"
import React from 'react'
import { Home, Search } from 'lucide-react'

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
            <div className="max-w-2xl w-full text-center">
                {/* 404 Number */}
                <div className="mb-8">
                    <h1 className="text-9xl font-bold text-blue-600 mb-4 ">
                        404
                    </h1>
                    <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
                </div>

                {/* Error Message */}
                <h2 className="text-4xl font-bold text-gray-800 mb-4">
                    Oops! Page Not Found
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    {"The page you're looking for seems to have wandered off. Don't worry, even the best explorers lose their way sometimes!"}
                </p>

                {/* Illustration */}
                <div className="mb-8">
                    <svg
                        className="w-64 h-64 mx-auto text-indigo-300"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1}
                            d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <a
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                    </a>
                </div>


            </div>
        </div>
    )
}

export default NotFoundPage