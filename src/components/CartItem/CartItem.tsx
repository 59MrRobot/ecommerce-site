import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../../context/AppContext';
import './CartItem.scss';

interface Props {
  item: ProductDetails;
}

export const CartItem: React.FC<Props> = ({ item }) => {
  const { handleTotalPrice } = useContext(AppContext);
  const [itemTotal, setItemTotal] = useState(0);
  const [itemQuantity, setItemQuantity] = useState(1);

  useEffect(() => {
    handleTotalPrice(itemQuantity * item.price.current.value);
  }, [handleTotalPrice, item.price, itemQuantity]);

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
            <input
              type="number"
              id="quantity"
              value={itemQuantity}
              onChange={(event) => {
                if (+event.target.value >= 0) {
                  setItemQuantity(+event.target.value);
                  handleTotalPrice(+event.target.value * item.price.current.value);
                }
              }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
