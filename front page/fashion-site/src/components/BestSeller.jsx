// components/BestSeller.jsx
import React from "react";
import ProductCard from "./ProductCard";
import products from "../data/products";

export default function BestSeller() {
  return (
    <section className="py-12 px-6 bg-white">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold">Our Best Seller</h2>
        <button className="border border-gray-400 px-4 py-1 rounded-full text-sm hover:border-black hover:text-black">
          Browse More Products
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {products.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
