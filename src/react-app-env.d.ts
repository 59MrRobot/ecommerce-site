// / <reference types="react-scripts" />

interface Category {
  id: number,
  img: string,
  title: string,
  name: string,
}

interface User {
  _id: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  image: string;
  status: string;
  fullName: string;
  country: string;
  number: string;
  createdAt: string;
  accessToken: string;
}

interface Product {
  _id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
  size: string[];
  color: string[];
  price: number;
  inStock: boolean;
}

interface Cart {
  _id: string;
  userId: string;
  products: CartProduct[];
}

interface CartProduct {
  productId: string;
  quantity: number;
  size: string;
  color: string;
  total: number;
}

interface Order {
  _id: string;
  userId: string;
  products: {
    productId: string;
    quantity: number;
  }[];
  amount: number;
  address: string;
  status: string;
}