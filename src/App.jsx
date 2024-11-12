import { useState } from 'react'

import './App.css'
import { CartProvider } from './CartContext';
import Header from './components/header/Header';
import ProductList from './components/productslist/ProductList';
import CartModal from './components/cartmodal/CartModal';
// import ProductForm from './components/ProductForm';

const App = () => {
  const [isCartOpen, setCartOpen] = useState(false);

  const toggleCart = () => setCartOpen(!isCartOpen);

  return (
    <CartProvider>
      <div className="App">
        <Header onCartToggle={toggleCart} />
        {/* <ProductForm /> */}
        <ProductList />
        {isCartOpen && <CartModal onClose={toggleCart} />}
      </div>
    </CartProvider>
  );
};

export default App;
