import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ProductsCard() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products") // ✅ axios used here
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div style={{ maxWidth: '19000px' }}>
      <h4 className="mt-4 text-center">Products (Fetched with axios)</h4>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {products.map(product => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top p-3" style={{ height: '200px', objectFit: 'contain' }} alt={product.title} />
              <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <p className="card-text text-muted">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsCard;
