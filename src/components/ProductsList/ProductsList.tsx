import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { Product } from '../Product/Product';
import './ProductsList.scss';

export const ProductsList: React.FC = () => {
  const { products, sortBy, priceValue, selectedBrands } = useContext(AppContext);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (priceValue) {
      setFilteredProducts(products.filter(product => product.price.current.value >= priceValue));
    }
  }, [priceValue, products]);

  switch (sortBy) {
    case 'descending':
      filteredProducts.sort((product1, product2) => {
        return product2.price.current.value - product1.price.current.value;
      });
      break;
    case 'ascending':
      filteredProducts.sort((product1, product2) => {
        return product1.price.current.value - product2.price.current.value;
      });
      break;
  }

  useEffect(() => {
    if (selectedBrands.length !== 0) {
      setFilteredProducts(products.filter(product => selectedBrands.includes(product.brandName)));
    } else {
      setFilteredProducts(products);
    }
  }, [products, selectedBrands]);

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