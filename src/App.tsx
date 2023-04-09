import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Cart } from './pages/Cart';
import { Error } from './pages/Error';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Product } from './pages/Product';
import { ProductList } from './pages/ProductList';
import { Register } from './pages/Register';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} errorElement={<Error />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/signin" element={<Login />}/>
        <Route path="/products/category/:category" element={<ProductList />}/>
        <Route path="/product/:id" element={<Product />}/>
      </Routes>
    </div>
  );
}

export default App;
