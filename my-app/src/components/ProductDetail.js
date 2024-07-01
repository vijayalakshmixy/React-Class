

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import './ProductDetail.css'; // Import the CSS file for styling

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h2>Product Details</h2>
      <img src={product.thumbnail} alt={product.title} className="product-detail-image" />
      <button>Add to cart</button>
      <div className="product-detail-info">
        <h2>{product.title}</h2>
        <p>Category: {product.category}</p>
        <p>Rating: {product.rating} ⭐</p>
        <p>Price: ${product.price}</p>
        <p>stock: ${product.stock}</p>
        {/* <p>{product.description}</p> */}
      </div>
    </div>
  );
};

export default ProductDetail;

