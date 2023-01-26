import React from 'react';
import './App.scss';
import { Cart } from './pages/Cart/Cart';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Product } from './pages/Product';
import { ProductList } from './pages/ProductList';
import { Register } from './pages/Register';

const App: React.FC = () => {
  return (
    <div className="App">
      <Home />
      {/* <ProductList /> */}
      {/* <Product /> */}
      {/* <Register /> */}
      {/* <Login /> */}
      {/* <Cart /> */}
    </div>
  );
}

export default App;
