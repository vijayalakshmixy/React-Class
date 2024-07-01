import React from 'react';
import ProductItem from './ProductItem';

function ProductItem({ products }) {
  return (
    <div id="product-list" className="product-list">
      {products.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductItem;
