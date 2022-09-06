import { options } from "./api";

export const getCategories = () => {
  return fetch('https://asos2.p.rapidapi.com/categories/list?lang=en-US&country=US', options)
    .then(response => response.json());
}