import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { Product } from '../Product/Product';
import './ProductsList.scss';

export const ProductsList: React.FC = () => {
  const { filteredProducts } = useContext(AppContext);

  return (
    <ul className="products-list">
      {filteredProducts.map(product => (
        <li key={product.id}>
          <Product product={product} />
        </li>
      ))}
    </ul>
  )
}