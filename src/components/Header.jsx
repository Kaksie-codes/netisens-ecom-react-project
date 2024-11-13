/* eslint-disable react/prop-types */

import { useContext } from 'react';
import { CartContext } from '../CartContext';
import DisplayStats from './DisplayStats';

const Header = ({ onCartToggle }) => {
  const { cart, setSearchQuery } = useContext(CartContext);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header>      
      <DisplayStats/>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearch}
      />
      <button onClick={onCartToggle}>
        Cart ({cart.reduce((count, item) => count + item.quantity, 0)})
      </button>
    </header>
  );
};

export default Header;
