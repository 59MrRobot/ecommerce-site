import React from 'react';
import { Filters } from '../Filters';
import { Product } from '../Product/Product';
import './ProductsList.scss';

interface Props {
  categoryName: string;
  products: Product[];
}

export const ProductsList: React.FC<Props> = ({ categoryName, products }) => {
  return (
    <div className="main-content">
      <div className="main-content__wrapper">
      <Filters />

        <section className="products">
          <h1 className="products__title">{categoryName}</h1>
          <ul className="products-list">
            {products.map(product => (
              <li key={product.id}>
                <Product product={product} />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
