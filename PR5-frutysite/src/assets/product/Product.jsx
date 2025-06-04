import React, { useState, useEffect } from "react";
import productData from "./data.json";
import "./product.css";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredGender, setFilteredGender] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const [categories, setCategories] = useState([]);
  console.log(categories);

  useEffect(() => {
    const men = productData.product[0].men[0];
    const women = productData.product[0].women[0];

    const flattenProducts = (section, gender) =>
      Object.values(section)
        .flat()
        .map((item) => ({ ...item, gender }));

    const menProducts = flattenProducts(men, "Men");
    const womenProducts = flattenProducts(women, "Women");


    const combinedProducts = [...menProducts, ...womenProducts];
    setProducts(combinedProducts);


  }, []);

  // Update categories whenever gender changes
  useEffect(() => {
    if (filteredGender === "All") {
      setCategories([]);
      setSelectedCategory("All");
    } else {
      const genderProducts = products.filter((p) => p.gender === filteredGender);
      console.log(genderProducts);

      const uniqueCategories = Array.from(new Set(genderProducts.map((p) => p.category)));


      setCategories(uniqueCategories);
      setSelectedCategory("All");
    
      
    }
  }, [filteredGender, products]);

  // Filter products
  const displayedProducts = products.filter((p) => {
    const genderMatch = filteredGender === "All" || p.gender === filteredGender;
    const categoryMatch = selectedCategory === "All" || p.category === selectedCategory;
    return genderMatch && categoryMatch;
  });

  return (
    <div className="container py-4">
      <h2 align="center" className="my-4">PRODUCTS</h2>

      {/* Gender Filter Buttons */}
      <div className="d-flex justify-content-center gap-3 mb-3">
        {["All", "Men", "Women"].map((gender) => (
          <button
            key={gender}
            className={`btn ${filteredGender === gender ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setFilteredGender(gender)}
          >
            {gender}
          </button>
        ))}
      </div>

      {/* Category Filter Buttons (only show if gender is Men or Women) */}
      {filteredGender !== "All" && (
        <div className="d-flex justify-content-center gap-3 mb-4 flex-wrap">
          <button
            className={`btn ${selectedCategory === "All" ? "btn-secondary" : "btn-outline-secondary"}`}
            onClick={() => setSelectedCategory("All")}
          >
            All
          </button>
          {categories.map((cat) => (
            console.log(`Category: ${cat}`),
            console.log(`Selected Category: ${selectedCategory}`),
            

            <button
              key={cat}
              className={`btn ${selectedCategory === cat ? "btn-secondary" : "btn-outline-secondary"}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Product Cards */}
      <div className="row g-4">
        {displayedProducts.map((product) => (
          <div
            key={`${product.gender}-${product.id}-${product.model || product.name}`}
            className="col-12 col-sm-6 col-md-4 col-lg-3 px-4"
          >
            <div className="card h-100 shadow-sm rounded-3 border-0 bg-light">
              <img
                src={product.image}
                alt={product.model || product.name}
                className="card-img-top product-image"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">
                  {product.brand} {product.model || product.name}
                </h5>
                <p className="card-text text-muted flex-grow-1">
                  {product.description || product.category}
                </p>
                <p className="fw-bold text-primary fs-5">
                  ₹{product.price.toLocaleString()}
                </p>
                {product.available !== undefined && (
                  <p
                    className={`mb-0 ${product.available ? "text-success" : "text-danger"}`}
                  >
                    {product.available ? "In Stock" : "Out of Stock"}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
