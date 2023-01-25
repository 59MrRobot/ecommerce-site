import React from 'react';
import './App.scss';
import { Home } from './pages/Home';
import { Product } from './pages/Product';
import { ProductList } from './pages/ProductList';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <ProductList /> */}
      <Product />
    </div>
  );
}

export default App;
