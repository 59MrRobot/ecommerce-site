import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Categories } from '../Categories';
import { FiltersList } from '../FiltersList';
import { ProductDetails } from '../ProductDetails';
import { Products } from '../Products';
import './MainContent.scss';

interface Props {
  categoryName: string;
  selectedProductName: string;
  selectedCategoryTitle: string;
  selectedChildTitle: string;
}

export const MainContent: React.FC<Props> = ({ 
  categoryName,
  selectedProductName,
  selectedCategoryTitle,
  selectedChildTitle,
}) => {
  
  return (
    <div className="main-content">
      <Categories />

      <div className="main-content__wrapper">
        <h1 className="main-content__title">{categoryName}</h1>
        <FiltersList />

        <Routes>
          <Route
            path={`:${selectedCategoryTitle.toLowerCase().split(' ').join('_')}/${selectedChildTitle.toLowerCase().split(' ').join('-')}`}
            element={<Products categoryName={categoryName} />}
          />
          <Route
            path={`product/${selectedProductName.toLowerCase().split(' ').join('-')}`}
            element={<ProductDetails />}
          />
        </Routes>
      </div>
    </div>
  )
}
