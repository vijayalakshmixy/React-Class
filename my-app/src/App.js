import React, { useState, useEffect } from 'react';
import './e_comerce.css'; // Importing the CSS file
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import LoginModal from './components/LoginModal';
import Footer from './components/Footer';

function App() {
  const [category, setCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);

  useEffect(() => {
    let url = 'https://dummyjson.com/products';
    if (category && category !== 'all') {
      url += `/category/${category}`;
    }

    fetch(url)
      .then(response => response.json())
      .then(data => setProducts(data.products)) // Access the products array from the response
      .catch(error => console.error('Error fetching products:', error));
  }, [category]);

  const handleAddToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      <Header cartCount={cartCount} setShowLogin={setShowLogin} setIsSignUp={setIsSignUp} />
      <Navbar setCategory={setCategory} />
      <ProductList products={products} handleAddToCart={handleAddToCart} />
      {showLogin && (
        <LoginModal
          setShowLogin={setShowLogin}
          isSignUp={isSignUp}
          setIsSignUp={setIsSignUp}
        />
      )}
      <Footer/>
    </div>
  );
}

export default App;
