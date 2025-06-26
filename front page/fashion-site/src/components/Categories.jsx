// components/Categories.jsx
import React from "react";

const categories = [
  { id: 1, name: "Men", image: "/assets/men.jpg" },
  { id: 2, name: "Women", image: "/assets/women.jpg" },
  { id: 3, name: "Kids", image: "/assets/kids.jpg" },
  { id: 4, name: "Accessories", image: "/assets/accessories.jpg" },
];

export default function Categories() {
  return (
    <section className="py-12 px-6 bg-[#f9f9f9]">
      <h2 className="text-2xl font-semibold mb-6">Our Collection</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((cat) => (
          <div key={cat.id} className="relative group">
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-60 object-cover rounded-lg shadow group-hover:opacity-80"
            />
            <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1 rounded-full text-sm font-semibold shadow hover:bg-pink-100">
              {cat.name}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
