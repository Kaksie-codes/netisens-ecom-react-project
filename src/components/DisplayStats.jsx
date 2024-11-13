import { useContext } from 'react';
import { CartContext } from '../CartContext';

const DisplayStats = () => {
  const { title } = useContext(CartContext);

  return (
    <div className="display-stats">
      <h1>{title}</h1>
    </div>
  );
};

export default DisplayStats;
