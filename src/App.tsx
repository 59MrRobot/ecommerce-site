import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { AppContext } from './context/AppContext';
import { Categories } from './components/Categories';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainContent } from './components/MainContent';
import { getProductsList } from './api/productsList';
// import { Filters } from './components/Filters';
import list from './api/catId=4209.json';
import prod from './api/product.json';
import { ProductDetails } from './components/ProductDetails';
import { getProductDetails } from './api/product';
import { Cart } from './components/Cart';

// import { ProductsList } from './components/ProductsList';

const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedSectionTitle, setSelectedSectionTitle] = useState<string | undefined>('men');
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState('');
  const [selectedChildTitle, setSelectedChildTitle] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [facets, setFacets] = useState<Facet[]>([]);
  const [priceRangeFacet, setPriceRangeFacet] = useState<Facet | undefined>();
  const [categoryName, setCategoryName] = useState('');
  const [sortBy, setSortBy] = useState('none');
  const [priceValue, setPriceValue] = useState(0);
  const [brandsFacet, setBrandsFacet] = useState<Facet | undefined>();
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedProductId, setSelectedProductId] = useState(0);
  const [productDetails, setProductDetails] = useState<ProductDetails | undefined>()
  const [cart, setCart] = useState<ProductDetails[]>([]);

  const handleCategorySelection = useCallback(
    (categoryId: number) => {
      setSelectedCategoryId(categoryId);
    }, []);

  const handleCategorySelectionTitle = useCallback(
    (categoryTitle: string) => {
      setSelectedCategoryTitle(categoryTitle);
    }, []);

  const handleChildSelectionTitle = useCallback(
    (childTitle: string) => {
      setSelectedChildTitle(childTitle);
    }, []);

  const handleProductSelection = useCallback(
    (productId: number) => {
      setSelectedProductId(productId);
    }, []);

  const handleSort = useCallback(
    (sort: string) => {
      setSortBy(sort);
    }, []);

  const loadProducts = useCallback(
    async () => {
      const loadedProducts = await getProductsList(selectedCategoryId);

      setProducts(loadedProducts.products);
      setCategoryName(loadedProducts.categoryName);
      setFacets(loadedProducts.facets);
    }, [selectedCategoryId]);

  // useEffect(() => {
  //    loadProducts();
  // }, [loadProducts]);

  useEffect(() => {
    setProducts(list.products);
    setCategoryName(list.categoryName);
    setFacets(list.facets);
  }, []);

  useEffect(() => {
    setPriceRangeFacet(facets.find(facet => facet.name === 'Price Range'));
    setPriceValue(Number(priceRangeFacet?.facetValues[0].id));
    setBrandsFacet(facets.find(facet => facet.name === 'Brand'));
  }, [facets, priceRangeFacet?.facetValues]);

  const handlePriceFilter = useCallback((range: number) => {
    setPriceValue(range);
  }, []);

  const loadProductDetails = useCallback(
    async () => {
      const loadedProductDetails = await getProductDetails(selectedProductId);

      setProductDetails(loadedProductDetails);
    }, [selectedProductId]);

    // useEffect(() => {
    //    loadProductDetails();
    // }, [loadProductDetails])

    useEffect(() => {
      setProductDetails(prod);
    }, [productDetails]);

  return (
    <AppContext.Provider value={{
      search,
      selectedSectionTitle,
      selectedCategoryId,
      handleCategorySelection,
      selectedCategoryTitle,
      handleCategorySelectionTitle,
      selectedChildTitle,
      handleChildSelectionTitle,
      products,
      sortBy,
      handleSort,
      priceRangeFacet,
      priceValue,
      handlePriceFilter,
      brandsFacet,
      selectedBrands,
      setSelectedBrands,
      selectedProductId,
      handleProductSelection,
      productDetails,
      cart,
      setCart,
    }}>
      <div className="app">
        <Header />

        <Routes>
          <Route 
            path="/" 
            element={<Navigate 
              to='/men'
              replace={true}
            />}
          />
          <Route 
            path={`:${selectedSectionTitle}/*`}
            element={<Categories 
              setSearch={setSearch} 
              setSelectedSectionTitle={setSelectedSectionTitle}
            />}
          />
        </Routes>

        <Routes>
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route 
            path={`:${selectedSectionTitle}/${selectedCategoryTitle.toLowerCase().split(' ').join('_')}/${selectedChildTitle.toLowerCase().split(' ').join('-')}`} 
            element={<MainContent
              categoryName={categoryName}
            />}
          />
          <Route 
            path={`:${selectedSectionTitle}/${selectedCategoryTitle.toLowerCase().split(' ').join('_')}/${selectedChildTitle.toLowerCase().split(' ').join('-')}/product/${productDetails?.name.toLowerCase().split(' ').join('-')}`} 
            element={<ProductDetails />}
          />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
