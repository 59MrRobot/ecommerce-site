import React from 'react';
import './Header.scss';

// import { getCategories } from '../../api/categories';

// import { getProducts } from '../../api/products';

export const Header: React.FC = React.memo(
  () => {
    return (
      <div className="header">
        <div className="header__wrapper">
          <div className="header__nav">
            <img
              src={`${process.env.PUBLIC_URL}/images/logo-1.png`} 
              alt=""
              className="header__logo"
            />

            <div className="header__cart">Cart</div>
          </div>
        </div>
      </div>
    );
  }
);
