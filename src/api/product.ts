import { options } from "./api";

export const getProductDetails = (productId: number) => {
  return fetch(`https://asos2.p.rapidapi.com/products/v3/detail?id=${productId}&currency=USD&sizeSchema=US&store=US&lang=en-US`, options)
    .then(response => response.json());
}