
// import React, { useState, useEffect } from 'react';
// import './e_commerce.css'; // Importing the CSS file
// import Header from './components/Header';
// import Navbar from './components/Navbar';
// import ProductList from './components/ProductList';
// import Footer from './components/Footer';
// import ImageCarousel from './components/Carousel';
// // import ProductDetail from './components/ProductDetail'; // Uncomment this line if ProductDetail exists
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
//     <div>
//       <Header 
//         cartCount={cartCount} 
//         handleSearch={handleSearch} 
//         setShowLogin={setShowLogin}
//       />
//       <Navbar setCategory={setCategory} />
//       <ImageCarousel />
//       {!selectedProduct ? (
//         <ProductList 
//           products={filteredProducts} 
//           handleAddToCart={handleAddToCart} 
//           setSelectedProduct={setSelectedProduct} 
//         />
//       ) : (
//         // <ProductDetail product={selectedProduct} setSelectedProduct={setSelectedProduct} /> // Uncomment this line if ProductDetail exists
//         <div>Product detail view placeholder</div> // Placeholder until ProductDetail is available
//       )}
//       {showLogin && <LoginForm setShowLogin={setShowLogin} setMessage={setMessage} />}
//       {message && <div className="message">{message}</div>}
//       <Footer />
//     </div>
//   );
// }

// export default App;


// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
//         <Switch>
//           <Route exact path="/">
//             <ProductList 
//               products={filteredProducts} 
//               handleAddToCart={handleAddToCart} 
//             />
//           </Route>
//           <Route path="/product/:productId">
//             <ProductDetail products={products} />
//           </Route>
//         </Switch>
//         {showLogin && <LoginForm setShowLogin={setShowLogin} setMessage={setMessage} />}
//         {message && <div className="message">{message}</div>}
//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;


import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './e_commerce.css'; // Importing the CSS file
import Header from './components/Header';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Footer from './components/Footer';
import ImageCarousel from './components/Carousel';
import LoginForm from './components/LoginForm';

function App() {
  const [category, setCategory] = useState('all');
  const [products, setProducts] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [message, setMessage] = useState('');

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
          handleSearch={handleSearch} 
          setShowLogin={setShowLogin}
        />
        <Navbar setCategory={setCategory} />
        <ImageCarousel />
        <Routes>
          <Route path="/" element={<ProductList products={filteredProducts} handleAddToCart={handleAddToCart} />} />
          <Route path="/product/:productId" element={<ProductDetail products={products} />} />
        </Routes>
        {showLogin && <LoginForm setShowLogin={setShowLogin} setMessage={setMessage} />}
        {message && <div className="message">{message}</div>}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
