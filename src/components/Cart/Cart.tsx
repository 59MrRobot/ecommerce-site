import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { CartItem } from '../CartItem';
import './Cart.scss';

export const Cart: React.FC = () => {
  const { cart, setCart } = useContext(AppContext);

  return (
    <div className="cart">
      <div className="cart__wrapper">
        <img 
          src={`${process.env.PUBLIC_URL}/images/cart.png`}
          alt="cart"
          className="cart__image"
        />

        {cart.length === 0
          ? (
            <div>
              <p>Cart is empty</p>
            </div>
          )
          : (
            <div>
              {cart.map(item => (
                <CartItem item={item} />
              ))}
            </div>
          )}

        <button
          type="button"
          className="cart__clear"
          onClick={() => setCart([])}
        >
          Clear
        </button>
      </div>
    </div>
  )
}
