// import React from 'react';

// function Navbar({ setCategory }) {
//   const handleCategoryChange = (category) => {
//     setCategory(category);
//   };

//   return (
//     <nav className="navbar">
//       <ul className="unorder">
//         <li><a href="#" onClick={() => handleCategoryChange('all')}>HOME</a></li>
//         <li><a href="#" onClick={() => handleCategoryChange('smartphones')}>SMARTPHONES</a></li>
//         <li><a href="#" onClick={() => handleCategoryChange('beauty')}>BEAUTY</a></li>
//         <li><a href="#" onClick={() => handleCategoryChange('furniture')}>FURNITURE</a></li>
//         <li><a href="#" onClick={() => handleCategoryChange('groceries')}>GROCERIES</a></li>
//         <li><a href="#" onClick={() => handleCategoryChange('fragrances')}>FRAGRANCES</a></li>
//         <li><a href="#" onClick={() => handleCategoryChange('motorcycle')}>MOTORCYCLE</a></li>
//         <li><a href="#" onClick={() => handleCategoryChange('tops')}>TOPS</a></li>
//         <li><a href="#" onClick={() => handleCategoryChange('sunglasses')}>SUNGLASSES</a></li>
//         <li><a href="#" onClick={() => handleCategoryChange('laptops')}>LAPTOPS</a></li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;


import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setCategory }) => {
  return (
    <nav className='navbar'>
      <ul className='unorder'>
        // <li><Link to="/">Home</Link></li>
         <li><Link to="/" onClick={() => setCategory('all')}>Home</Link></li>
        <li><Link to="/" onClick={() => setCategory('electronics')}>Electronics</Link></li>
        <li><Link to="/" onClick={() => setCategory('groceries')}>Groceries</Link></li>
        <li><Link to="/" onClick={() => setCategory('smartphones')}>smartphones</Link></li>
        <li><Link to="/" onClick={() => setCategory('furniture')}>furniture</Link></li>
        <li><Link to="/" onClick={() => setCategory('fragrances')}>fragrances</Link></li>
        <li><Link to="/" onClick={() => setCategory('motorcycle')}>motorcycle</Link></li>
        <li><Link to="/" onClick={() => setCategory('tops')}>tops</Link></li>
        <li><Link to="/" onClick={() => setCategory('sunglasses')}>sunglasses</Link></li>
        <li><Link to="/" onClick={() => setCategory('laptops')}>laptops</Link></li>
        // <li><Link to="/" onClick={() => setCategory('beauty')}>beauty</Link></li>
        {/* Add more categories as needed */}
      </ul>
    </nav>
  );
};

export default Navbar;
