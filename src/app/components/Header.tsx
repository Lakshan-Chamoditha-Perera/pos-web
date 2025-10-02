import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">POS Web</h1>
      </div>
    </header>
  );
};

export default Header;
