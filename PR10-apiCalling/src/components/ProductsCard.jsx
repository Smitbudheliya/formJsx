import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../features/products/productsSlice';

const ProductsCard = () => {
  const dispatch = useDispatch();
  const { data: products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="mt-4">
      <h4>Products (with axios + Redux Thunk)</h4>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
        {products.map(product => (
          <div className="col" key={product.id}>
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top p-3"
                style={{ height: '200px', objectFit: 'contain' }}
                alt={product.title}
              />
              <div className="card-body">
                <h6 className="card-title">{product.title}</h6>
                <p className="card-text">${product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsCard;
