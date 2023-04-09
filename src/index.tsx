import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from "react-router-dom";
import './index.scss';
import App from './App';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = createRoot(document.getElementById('root')!);

// const router = createHashRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <Error />,
//   },
//   {
//     path: "/cart",
//     element: <Cart />,
//   },
//   {
//     path: "/register",
//     element: <Register />,
//   },
//   {
//     path: "/signin",
//     element: <Login />,
//   },
//   {
//     path: "/products/category/:category",
//     element: <ProductList />,
//   },
//   {
//     path: "/product/:id",
//     element: <Product />,
//   },
// ]);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading="null" persistor={persistor}>
        {/* <RouterProvider router={router} /> */}
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
