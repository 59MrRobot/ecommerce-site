import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss';
import App from './App';
import { Error } from './pages/Error/Error';
import { Cart } from './pages/Cart';
import { Register } from './pages/Register';
import { Login } from './pages/Login';
import { ProductList } from './pages/ProductList';
import { Product } from './pages/Product';
import { Home } from './pages/Home';

const root = createRoot(document.getElementById('root')!);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "cart",
    element: <Cart />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "signin",
    element: <Login />,
  },
  {
    path: "products",
    element: <ProductList />,
  },
  {
    path: "products/:product",
    element: <Product />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
