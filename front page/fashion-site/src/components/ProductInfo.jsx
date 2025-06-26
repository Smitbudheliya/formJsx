// components/ProductInfo.jsx
import React from "react";

const features = [
  {
    id: 1,
    title: "Durable",
    desc: "Designed with lasting quality and strength for daily use.",
    icon: "🛡️",
  },
  {
    id: 2,
    title: "Stylish",
    desc: "Trendy and modern pieces that elevate your look.",
    icon: "💃",
  },
  {
    id: 3,
    title: "Comfortable",
    desc: "Built with premium materials to ensure all-day comfort.",
    icon: "🛋️",
  },
];

export default function ProductInfo() {
  return (
    <section className="py-12 px-6 bg-white text-center">
      <h2 className="text-2xl font-semibold mb-8">Why Shop With Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {features.map((feature) => (
          <div key={feature.id} className="p-6 border rounded-xl shadow hover:shadow-md transition">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600 text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
