import React from 'react';

function Navbar({ setCategory }) {
  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <nav className="navbar">
      <ul className="unorder">
        <li><a href="#" onClick={() => handleCategoryChange('all')}>HOME</a></li>
        <li><a href="#" onClick={() => handleCategoryChange('smartphones')}>SMARTPHONES</a></li>
        <li><a href="#" onClick={() => handleCategoryChange('beauty')}>BEAUTY</a></li>
        <li><a href="#" onClick={() => handleCategoryChange('furniture')}>FURNITURE</a></li>
        <li><a href="#" onClick={() => handleCategoryChange('groceries')}>GROCERIES</a></li>
        <li><a href="#" onClick={() => handleCategoryChange('fragrances')}>FRAGRANCES</a></li>
        <li><a href="#" onClick={() => handleCategoryChange('motorcycle')}>MOTORCYCLE</a></li>
        <li><a href="#" onClick={() => handleCategoryChange('tops')}>TOPS</a></li>
        <li><a href="#" onClick={() => handleCategoryChange('sunglasses')}>SUNGLASSES</a></li>
        <li><a href="#" onClick={() => handleCategoryChange('laptops')}>LAPTOPS</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
