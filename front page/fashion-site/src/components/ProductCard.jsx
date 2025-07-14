// components/ProductSection.jsx
import React from "react";



// Product data
const products = [
  {
    id: 1,
    title: "Denim Jacket",
    image: "/images/denim-jacket.jpg",
    price: 59.99,
    oldPrice: 89.99,
  },
  {
    id: 2,
    title: "Summer Dress",
    image: "/images/summer-dress.jpg",
    price: 39.99,
    oldPrice: 59.99,
  },
  {
    id: 3,
    title: "Running Shoes",
    image: "/images/shoes.jpg",
    price: 79.99,
    oldPrice: 109.99,
  },
];


// ProductCard Component
function ProductCard({ product }) {
  return (
    <div className="bg-white border rounded p-3 shadow-sm h-100">
      <img
        src={product.image}
        alt={product.title}
        className="img-fluid rounded mb-3"
        style={{ height: "250px", objectFit: "cover", width: "100%" }}
      />
      <h5 className="fw-semibold">{product.title}</h5>
      <p className="text-muted text-decoration-line-through">${product.oldPrice}</p>
      <p className="text-danger fw-bold">${product.price}</p>
    </div>
  );
}

// Main Section Component
export default function ProductSection() {
  return (
    <div className="container my-5">

      {/* Product Section */}
      <h2 className="mb-4 text-center">Featured Products</h2>
      <div className="row g-4">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
