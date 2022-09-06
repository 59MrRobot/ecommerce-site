import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { AppContext } from './context/AppContext';
import { Navigate, Route, Routes } from 'react-router-dom';
import { MainContent } from './components/MainContent';
import { ProductDetails } from './components/ProductDetails';
import { Cart } from './components/Cart';
import { Homepage } from './components/Homepage';

const App: React.FC = () => {
  const [selectedSectionTitle, setSelectedSectionTitle] = useState('men');
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState('');
  const [selectedChildTitle, setSelectedChildTitle] = useState('');
  const [facets, setFacets] = useState<Facet[]>([]);
  const [priceRangeFacet, setPriceRangeFacet] = useState<Facet | undefined>();
  const [categoryName, setCategoryName] = useState('');
  const [sortBy, setSortBy] = useState('none');
  const [priceValue, setPriceValue] = useState(0);
  const [brandsFacet, setBrandsFacet] = useState<Facet | undefined>();
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedProductId, setSelectedProductId] = useState(0);
  const [selectedProductName, setSelectedProductName] = useState('')
  const [cart, setCart] = useState<ProductDetails[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleFacetsSelection = useCallback(
    (facets: Facet[]) => {
      setFacets(facets);
    }, []);

  const handleCategoryName = useCallback(
    (categoryName: string) => {
      setCategoryName(categoryName);
    }, []);

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

  const handleProductNameSelection = useCallback(
    (productName: string) => {
      setSelectedProductName(productName);
    }, []);

  const handleSort = useCallback(
    (sort: string) => {
      setSortBy(sort);
    }, []);

  const handleSectionSelection = useCallback(
    (sectionTitle: string) => {
      setSelectedSectionTitle(sectionTitle);
  }, []);

  useEffect(() => {
    setPriceRangeFacet(facets.find(facet => facet.name === 'Price Range'));
    setPriceValue(Number(priceRangeFacet?.facetValues[0].id));
    setBrandsFacet(facets.find(facet => facet.name === 'Brand'));
  }, [facets, priceRangeFacet?.facetValues]);

  const handlePriceFilter = useCallback((range: number) => {
    setPriceValue(range);
  }, []);

  const handleTotalPrice = useCallback(
    (price: number) => {
      setTotalPrice(price);
    }, []);

  return (
    <AppContext.Provider value={{
      selectedSectionTitle,
      selectedCategoryId,
      handleCategorySelection,
      selectedCategoryTitle,
      handleCategorySelectionTitle,
      selectedChildTitle,
      handleChildSelectionTitle,
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
      selectedProductName,
      handleProductNameSelection,
      cart,
      setCart,
      totalPrice,
      handleTotalPrice,
      handleFacetsSelection,
      handleCategoryName,
      handleSectionSelection,
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
            path={`/${selectedSectionTitle}`}
            element={<Homepage />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path={`${selectedSectionTitle}/*`}
            element={<MainContent
              categoryName={categoryName}
              selectedProductName={selectedProductName}
              selectedCategoryTitle={selectedCategoryTitle}
              selectedChildTitle={selectedChildTitle}
            />}
          />
          {/* <Route
            path={`:${selectedSectionTitle}/${selectedCategoryTitle.toLowerCase().split(' ').join('_')}/${selectedChildTitle.toLowerCase().split(' ').join('-')}/product/${selectedProductName.toLowerCase().split(' ').join('-')}`} 
            element={<ProductDetails />}
          /> */}
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
