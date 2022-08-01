import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { AppContext } from './context/AppContext';
import { Categories } from './components/Categories';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ProductsList } from './components/ProductsList';
import { getProductsList } from './api/productsList';
// import { Filters } from './components/Filters';
import list from './api/catId=4209.json';

// import { ProductsList } from './components/ProductsList';

const App: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedSectionTitle, setSelectedSectionTitle] = useState<string | undefined>('men');
  const [selectedCategoryId, setSelectedCategoryId] = useState(0);
  const [selectedCategoryTitle, setSelectedCategoryTitle] = useState('');
  const [selectedChildTitle, setSelectedChildTitle] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [categoryName, setCategoryName] = useState('');

  const handleCategorySelection = (categoryId: number) => {
    setSelectedCategoryId(categoryId);
  }

  const handleCategorySelectionTitle = (categoryTitle: string) => {
    setSelectedCategoryTitle(categoryTitle);
  }

  const handleChildSelectionTitle = (childTitle: string) => {
    setSelectedChildTitle(childTitle);
  }

  const loadProducts = useCallback(
    async () => {
      const loadedProducts = await getProductsList(selectedCategoryId);

      setProducts(loadedProducts.products);
      setCategoryName(loadedProducts.categoryName);
    }, [selectedCategoryId]);

  useEffect(() => {
    // loadProducts();
  }, [loadProducts]);

  useEffect(() => {
    setProducts(list.products);
    setCategoryName(list.categoryName);
  }, []);

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
            path='/men/*'
            element={<Categories 
              setSearch={setSearch} 
              setSelectedSectionTitle={setSelectedSectionTitle}
            />}
          />
          <Route 
            path='/women/*' 
            element={<Categories 
              setSearch={setSearch} 
              setSelectedSectionTitle={setSelectedSectionTitle}
            />}
          />
        </Routes>

        <Routes>
          <Route
            path={`/${selectedSectionTitle}/${selectedCategoryTitle.toLowerCase().split(' ').join('_')}/${selectedChildTitle.toLowerCase().split(' ').join('-')}`}
            element={<ProductsList categoryName={categoryName} products={products} />}
          />
        </Routes>

        {/* <div className="main-content">
          <div className="main-content__wrapper">
            <Filters />

            <ProductsList categoryName={categoryName} products={products} />
          </div>
        </div> */}
      </div>
    </AppContext.Provider>
  );
}

export default App;
