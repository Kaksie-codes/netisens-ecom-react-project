

import { useContext } from 'react';
import { CartContext } from '../CartContext';
import ProductCard from './ProductCard';
import { products } from '../utils/products';




const ProductList = () => {
  const { searchQuery } = useContext(CartContext);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='products-wrap'>
      {
        filteredProducts.length > 0 ? (
          <div className='product-list'>
            {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
          </div>
        ) : (
          <p>No products found matching the search query.</p>
        )
      }     
    </div>
  );
};

export default ProductList;
