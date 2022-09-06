import { options } from "./api";

export const getProductsList = (categoryId: number) => {
  return fetch(`https://asos2.p.rapidapi.com/products/v2/list?limit=48&categoryId=${categoryId}&offset=0&store=US&lang=en-US&sizeSchema=US&currency=USD&sort=freshness&country=US`, options)
    .then(response => response.json());
}