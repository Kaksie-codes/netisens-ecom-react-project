

import { useContext } from 'react';
import { CartContext } from '../../CartContext';
import ProductCard from '../productcard/ProductCard';
import { products } from '../../utils/products';




const ProductList = () => {
  const { searchQuery } = useContext(CartContext);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className='product-list'>
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
