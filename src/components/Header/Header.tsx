import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

export const Header: React.FC = React.memo(
  () => {
    return (
      <div className="header">
        <div className="header__wrapper">
          <div className="header__nav">
            <Link to="/">
              <img
                src={`${process.env.PUBLIC_URL}/images/logo-1.png`} 
                alt=""
                className="header__logo"
              />
            </Link>

            <Link to="/cart">
              <img
                src={`${process.env.PUBLIC_URL}/images/cart.png`} 
                alt=""
                className="header__cart"
              />
            </Link>
          </div>
        </div>
      </div>
    );
  }
);
