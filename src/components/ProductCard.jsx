/* eslint-disable react/prop-types */
// const { addToCart } = useContext(CartContext);

import { useContext } from 'react';
import { CartContext } from '../CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
