import { useState } from 'react'

import './App.css'
import { CartProvider } from './CartContext';
import Header from './components/Header';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
import EditButton from './components/EditButton';



const App = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => setCartOpen(!isCartOpen);

  return (
    <CartProvider>
      <div className="App">
        <Header onCartToggle={toggleCart} />        
        <ProductList />
        {isCartOpen && <CartModal onClose={toggleCart} />}
        <EditButton/>
      </div>
    </CartProvider>
  );
};

export default App;
