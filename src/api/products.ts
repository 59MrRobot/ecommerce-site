export const getProducts = (category: string, search: string, page: number) => {
  return fetch(`https://amazon24.p.rapidapi.com/api/product?categoryID=${category}&keyword=${search}&country=US&page=${page}`)
    .then(response => response.json())
}