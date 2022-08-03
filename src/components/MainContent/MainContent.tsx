import React from 'react';
import { Filters } from '../Filters';
import { Products } from '../Products';
import './MainContent.scss';

interface Props {
  categoryName: string;
}

export const MainContent: React.FC<Props> = ({ categoryName }) => {
  
  return (
    <div className="main-content">
      <div className="main-content__wrapper">
      <h1 className="main-content__title">{categoryName}</h1>
        <Filters />

        <Products categoryName={categoryName} />
      </div>
    </div>
  )
}
