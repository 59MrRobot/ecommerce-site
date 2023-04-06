// / <reference types="react-scripts" />

interface Category {
  id: number,
  img: string,
  title: string,
  name: string,
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