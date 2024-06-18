import React from 'react';

function Header({ cartCount, setShowLogin, setIsSignUp }) {
  return (
    <div className="search_main">
      <div className="headline">
        <p style={{ fontSize: '2.4em' }}>E-Commerce</p>
        <div className="searchbar">
          <input type="search" placeholder="Enter your product name..." style={{ border: 'none', outline: 'none' }} />
          <i className="fa fa-search" style={{ color: 'black' }}></i>
        </div>
        <div className="shopping_icon">
          <span className='v'>Cart: {cartCount}</span>
          <button className='box' onClick={() => { setShowLogin(true); setIsSignUp(false); }}>Login</button>
          {/* <button className='box' onClick={() => { setShowLogin(true); setIsSignUp(true); }}>Sign Up</button> */}
        </div>
      </div>
    </div>
  );
}

export default Header;
