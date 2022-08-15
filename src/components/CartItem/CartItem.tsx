import React from 'react';
import './CartItem.scss';

interface Props {
  item: ProductDetails;
}

export const CartItem: React.FC<Props> = ({ item }) => {
  return (
    <div className="cart-item">
      <div className="cart-item__wrapper">
        <div>
          <img 
            src={`https://${item.media.images[0].url}`} 
            alt="" 
            className="cart-item__image"
          />
        </div>
        <div className="cart-item__info">
          <p>{item.name}</p>
          <p>{item.price.current.text}</p>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <input type="number" id="quantity" />
          </div>
        </div>
      </div>
    </div>
  )
}
