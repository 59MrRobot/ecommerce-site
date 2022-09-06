import React from 'react';
import './FiltersList.scss';
import { Filter } from '../Filter/Filter';

export const FiltersList: React.FC = () => {
  const filterTypes = ['sort', 'price', 'brands'];

  return (
    <section className="filters">
      <div className="filters__wrapper">
        {filterTypes.map((type, index) => (
          <Filter key={index} filterType={type} />
        ))}
      </div>
    </section>
  )
}
