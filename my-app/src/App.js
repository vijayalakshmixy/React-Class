

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './e_commerce.css'; // Importing the CSS file
// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import ProductList from './components/ProductList';
// import ProductDetail from './components/ProductDetail';
// import Footer from './components/Footer';
// import ImageCarousel from './components/Carousel';
// import LoginForm from './components/LoginForm';

// function App() {
//   const [category, setCategory] = useState('all');
//   const [products, setProducts] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showLogin, setShowLogin] = useState(false);
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     let url = 'https://dummyjson.com/products';
//     if (category && category !== 'all') {
//       url += `/category/${category}`;
//     }

//     fetch(url)
//       .then(response => response.json())
//       .then(data => setProducts(data.products)) // Access the products array from the response
//       .catch(error => console.error('Error fetching products:', error));
//   }, [category]);

//   const handleAddToCart = () => {
//     setCartCount(cartCount + 1);
//   };

//   const handleSearch = (searchTerm) => {
//     setSearchTerm(searchTerm.toLowerCase());
//   };

//   const filteredProducts = products.filter(product =>
//     product.title.toLowerCase().includes(searchTerm)
//   );

//   return (
//     <Router>
//       <div>
//         <Header 
//           cartCount={cartCount} 
//           handleSearch={handleSearch} 
//           setShowLogin={setShowLogin}
//         />
//         <Navbar setCategory={setCategory} />
//         <ImageCarousel />
//         <Routes>
//           <Route path="/" element={<ProductList products={filteredProducts} handleAddToCart={handleAddToCart} />} />
//           <Route path="/product/:productId" element={<ProductDetail products={products} />} />
//         </Routes>
//         {showLogin && <LoginForm setShowLogin={setShowLogin} setMessage={setMessage} />}
//         {message && <div className="message">{message}</div>}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './e_commerce.css'; // Importing the CSS file
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';
import ImageCarousel from './components/Carousel';

function App() {
  const [category, setCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [showLogin, setShowLogin] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm.toLowerCase());
  };

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );

  return (
    <Router>
      <div>
        <Header 
          cartCount={cartCount} 
          setShowLogin={setShowLogin} 
          setIsSignUp={setIsSignUp} 
          handleSearch={handleSearch} 
        />
        <Navbar setCategory={setCategory} />
        <ImageCarousel />
        <Routes>
          <Route path="/" element={<ProductList products={filteredProducts} handleAddToCart={handleAddToCart} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        {showLogin && (
          <LoginForm
            setShowLogin={setShowLogin}
            isSignUp={isSignUp}
            setIsSignUp={setIsSignUp}
          />
        )}
        <Footer />
      </div>
    </Router>
  );
}

export default App;

