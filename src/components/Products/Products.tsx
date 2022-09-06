import React from 'react';
import { ProductsList } from '../ProductsList/ProductsList';
import './Products.scss';

interface Props {
  categoryName: string;
}

export const Products: React.FC<Props> = ({ categoryName }) => {
  return (
    <section className="products">
      <ProductsList />
    </section>
  )
}
