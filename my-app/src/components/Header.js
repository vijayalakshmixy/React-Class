
import React from 'react';
// import './Header.css'; // Assuming you have a CSS file for Header styles

function Header({ cartCount, handleSearch, setShowLogin }) {
  const handleInputChange = (event) => {
    handleSearch(event.target.value);
  };

  return (
    <div className='header-container'>
      <div className="search_main">
        <div className="headline">
          <p style={{ fontSize: '2.4em' }}>E-Commerce</p>
          <div className="searchbar">
            <input 
              type="search" 
              placeholder="Enter your product name..." 
              style={{ border: 'none', outline: 'none' }} 
              onChange={handleInputChange}
            />
            <i className="fa fa-search" style={{ color: 'black' }}></i>
          </div>
          <div className="shopping_icon">
            <span className='cart-count'>Cart: {cartCount}</span>
            <button className='login-button' onClick={() => setShowLogin(true)}>Login</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
