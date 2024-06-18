import React from 'react';

function ProductList({ products, handleAddToCart }) {
  return (
    <div id="product-list" className="product-list">
      {Array.isArray(products) && products.length > 0 ? (
        products.map(product => (
          <div key={product.id} className="product-item">
            <img src={product.thumbnail} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
          </div>
        ))
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
}

export default ProductList;
