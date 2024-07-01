// src/components/ProductDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail({ products }) {
  const { productId } = useParams();
  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <button >Add to cart</button>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating}</p>
      <p>stock:{product.stock}</p>
      <p>{product.warrantyInformation}</p>

    </div>
  );
}

export default ProductDetail;
