// components/Navbar.jsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <h1 className="text-2xl font-bold">Fae<span className="text-pink-500">chion</span></h1>
      <ul className="flex space-x-6">
        <li><a href="#" className="hover:text-pink-500">Home</a></li>
        <li><a href="#" className="hover:text-pink-500">Shop</a></li>
        <li><a href="#" className="hover:text-pink-500">About</a></li>
        <li><a href="#" className="hover:text-pink-500">Contact</a></li>
      </ul>
      <div className="space-x-4">
        <button className="text-gray-600 hover:text-pink-500">🔍</button>
        <button className="text-gray-600 hover:text-pink-500">🛒</button>
      </div>
    </nav>
  );
}
