import React from 'react';
import './App.scss';
import { Home } from './pages/Home';
import { ProductList } from './pages/ProductList';

const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Home /> */}
      <ProductList />
    </div>
  );
}

export default App;
