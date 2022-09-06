import React, { useCallback, useContext, useEffect, useState } from 'react';
import { getProductsList } from '../../api/productsList';
import { AppContext } from '../../context/AppContext';
import { Loader } from '../Loader';
import { Product } from '../Product/Product';
import './ProductsList.scss';

export const ProductsList: React.FC = () => {
  const {
    selectedCategoryId,
    sortBy,
    priceValue,
    selectedBrands,
    handleFacetsSelection,
    handleCategoryName,
  } = useContext(AppContext);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showPage, setShowPage] = useState(false);

  const loadProducts = useCallback(
    async () => {
      const loadedProducts = await getProductsList(selectedCategoryId);

      setProducts(loadedProducts.products);
      handleCategoryName(loadedProducts.categoryName)
      handleFacetsSelection(loadedProducts.facets);
      setShowPage(true);
    }, [handleCategoryName, handleFacetsSelection, selectedCategoryId]);

  useEffect(() => {
     loadProducts();
  }, [loadProducts]);

  useEffect(() => {
    if (priceValue) {
      setFilteredProducts(products.filter(product => product.price.current.value >= priceValue));
    }
  }, [priceValue, products]);

  switch (sortBy) {
    case 'descending':
      filteredProducts.sort((product1, product2) => {
        return product2.price.current.value - product1.price.current.value;
      });
      break;
    case 'ascending':
      filteredProducts.sort((product1, product2) => {
        return product1.price.current.value - product2.price.current.value;
      });
      break;
  }

  useEffect(() => {
    if (selectedBrands.length !== 0) {
      setFilteredProducts(products.filter(product => selectedBrands.includes(product.brandName)));
    } else {
      setFilteredProducts(products);
    }
  }, [products, selectedBrands]);

  return showPage
    ? (
      <ul className="products-list">
        {filteredProducts.map(product => (
          <li key={product.id}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    )
    : (
      <Loader />
    )
}