"use client";
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-4 mt-auto">
      <div className="container mx-auto text-center text-sm">
        © {currentYear} POS Web. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
