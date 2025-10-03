"use client";

import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="text-3xl font-bold text-white flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-300 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-blue-900 font-bold text-lg">P</span>
                </div>
                <span>POS Web</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              <a
                href="#"
                className="text-white hover:bg-blue-500 hover:bg-opacity-60 hover:text-blue-100 px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Home
              </a>
              <a
                href="#"
                className="text-white hover:bg-blue-500 hover:bg-opacity-60 hover:text-blue-100 px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Products
              </a>
              <a
                href="#"
                className="text-white hover:bg-blue-500 hover:bg-opacity-60 hover:text-blue-100 px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Sales
              </a>
              <a
                href="#"
                className="text-white hover:bg-blue-500 hover:bg-opacity-60 hover:text-blue-100 px-6 py-3 rounded-lg text-base font-medium transition-all duration-200 ease-in-out transform hover:scale-105 hover:shadow-lg"
              >
                Settings
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-500 hover:bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50 transition-all duration-200"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-blue-700 bg-opacity-50 rounded-lg mt-2 backdrop-blur-sm">
            <a
              href="#"
              className="text-white hover:bg-blue-500 hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:bg-blue-500 hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
            >
              Products
            </a>
            <a
              href="#"
              className="text-white hover:bg-blue-500 hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
            >
              Sales
            </a>
            <a
              href="#"
              className="text-white hover:bg-blue-500 hover:bg-opacity-10 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200"
            >
              Settings
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;