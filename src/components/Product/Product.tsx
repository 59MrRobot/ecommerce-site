import React from 'react';
import './Product.scss';

interface Props {
  product: Product;
}

export const Product: React.FC<Props> = ({ product }) => {
  return (
    <div className="product">
      <div className="product__wrapper">
        <img 
          src={`https://${product.imageUrl}`} 
          alt="product"
          className="product__image"
        />
        <p className="product__title">{product.name}</p>
        <p className="product__price">{product.price.current.text}</p>
      </div>
    </div>
  )
}
