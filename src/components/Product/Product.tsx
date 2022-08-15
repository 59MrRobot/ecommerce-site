import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import './Product.scss';

interface Props {
  product: Product;
}

export const Product: React.FC<Props> = ({ product }) => {
  const { handleProductSelection, productDetails } = useContext(AppContext);

  return (
    <Link 
      to={`product/${productDetails?.name.toLowerCase().split(' ').join('-')}`} 
      className="product"
      onClick={() => handleProductSelection(product.id)}
    >
      <div className="product__wrapper">
        <img 
          src={`https://${product.imageUrl}`} 
          alt="product"
          className="product__image"
        />
        <p className="product__title">{product.name}</p>
        <p className="product__price">{product.price.current.text}</p>
      </div>
    </Link>
  )
}
