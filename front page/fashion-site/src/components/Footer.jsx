// components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-4 text-lg">Faechion</h3>
          <p>Modern fashion made simple. Dress to express.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Shop</h4>
          <ul>
            <li><a href="#" className="hover:underline">Men</a></li>
            <li><a href="#" className="hover:underline">Women</a></li>
            <li><a href="#" className="hover:underline">Kids</a></li>
            <li><a href="#" className="hover:underline">Accessories</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Connect</h4>
          <ul>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-8 text-xs text-gray-400">&copy; {new Date().getFullYear()} Faechion. All rights reserved.</p>
    </footer>
  );
}
