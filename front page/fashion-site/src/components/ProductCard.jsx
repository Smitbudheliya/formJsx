// components/ProductCard.jsx
import React from "react";

export default function ProductCard({ product }) {
  return (
    <div className="bg-gray-50 p-4 rounded-lg shadow hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.title}
        className="rounded-md mb-4 w-full h-60 object-cover"
      />
      <h3 className="font-medium text-lg">{product.title}</h3>
      <p className="text-sm text-gray-500 line-through">${product.oldPrice}</p>
      <p className="text-pink-600 font-semibold">${product.price}</p>
    </div>
  );
}
